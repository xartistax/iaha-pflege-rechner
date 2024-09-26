import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_GanzwaescheImBad(data: SurveyResult) { 
    


    /// GANZWÄSCHE IM BAD
    const mobilitaet = data['Mobilität'] as string;

    if ( mobilitaet !== '3' ) {
        PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = "Ja";
        PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = (2 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_1_default_GanzwaescheInBadDuscheOderAmLavabo) / 30;
    }



    
}
