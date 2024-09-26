import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_GanzwaescheImBad(data: SurveyResult) { 
    


    /// GANZWÄSCHE IM BAD

    const mobilitaet = data['Mobilität'] as string;
    const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
    const kognitiveProbleme = data['KognitiveProbleme'] as string;


    // if (mobilitaet === '1' || 
    //     mobilitaet === '2' || 
    //     bewegungseinschraenkung === '1' || 
    //     bewegungseinschraenkung === '2' || 
    //     kognitiveProbleme === '2') {
    //     PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = "Ja";
    //     PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = (2 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_1_default_GanzwaescheInBadDuscheOderAmLavabo) / 30;
    // } else  {
    //     PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = "Nein";
    //     PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = 0
    // }



    if ( PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett === 'Ja'  ) {
        PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = "Nein";
        PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = 0
        
    } else  {
        PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = (2 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_1_default_GanzwaescheInBadDuscheOderAmLavabo) / 30;
    }

    
}
