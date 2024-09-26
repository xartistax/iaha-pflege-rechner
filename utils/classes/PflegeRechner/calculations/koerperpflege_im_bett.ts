import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_KoerperpflegeImBett(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    const mobilitaet = data['Mobilität'] as string;
    


    if ( mobilitaet === '3' ) {
        PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett = 'Ja' 

        PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = "Nein";
        PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = 0

        PflegeRechnerFields.fields.calculationResults.field_152_teilwaesche_im_bad = "Nein";
        PflegeRechnerFields.fields.calculationResults.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad = 0
    }

    
}
