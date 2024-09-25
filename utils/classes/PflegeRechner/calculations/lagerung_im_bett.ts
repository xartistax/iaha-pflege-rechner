import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_LagerungImBett(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    




	const lageAendern = data['LageÄndern'] as string;



    

            /// Lagerung im Bett
            if ( lageAendern === '1' ) {
                PflegeRechnerFields.fields.calculationResults.field_167_LagerungImBett = 'Ja';
                PflegeRechnerFields.fields.calculationResults.field_202_pflegezeit_in_min_pro_tag_LagerungImBett = 
                PflegeRechnerFields.fields.calculationFields.field_187_default_LagerungImBett * 3;
    
            }
}
