import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_KoerperpflegeImBett(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    const mobilitaet = data['Mobilität'] as string;
    


    if ( mobilitaet === '3' ) {
        PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett = 'Ja' }

    
}
