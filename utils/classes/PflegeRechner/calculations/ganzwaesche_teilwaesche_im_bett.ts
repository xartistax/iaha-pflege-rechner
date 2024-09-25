import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_GanzwaescheTeilwaescheImBett() { 
    







    if ( PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett === 'Ja' ) {
        PflegeRechnerFields.fields.calculationResults.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett = PflegeRechnerFields.fields.calculationFields.field_2_default_GanzwaescheBettlaegerigeKlientIn
        PflegeRechnerFields.fields.calculationResults.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett = PflegeRechnerFields.fields.calculationFields.field_4_TeilwaescheImBett
    }

    
}
