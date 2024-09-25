import { SurveyResult } from "../../../../survey";
import { kantonAbgerechnetJa, krankenkassenAbgerechnetJa } from "../krankenkassen";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_Korekturen(data: SurveyResult) {
    // Call iahaCalculation to perform calculations
    

     //Korrekturen

     if (PflegeRechnerFields.fields.calculationResults.field_165_Begleitung_Toilettengang === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen === 'Ja') {
        PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen = -PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen;
    }

    if (PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen === 'Ja') {
        PflegeRechnerFields.fields.calculationResults.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen = (2 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen) / 30;
    }

    if (PflegeRechnerFields.fields.calculationResults.field_152_teilwaesche_im_bad === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen === 'Ja') {
        PflegeRechnerFields.fields.calculationResults.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen = (5 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen) / 30;
    }

    if (PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_172_Kompressionsstrumpfe === 'Ja') {
        PflegeRechnerFields.fields.calculationResults.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe = (2 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_189_default_KompressionsstruempfeOderVerband) / 30;
    }

    /// SUMME Korrekturzeiten
    PflegeRechnerFields.fields.calculationResults.field_216_Summe_Korrekturzeiten =
        PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen +
        PflegeRechnerFields.fields.calculationResults.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen +
        PflegeRechnerFields.fields.calculationResults.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen +
        PflegeRechnerFields.fields.calculationResults.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe;

}