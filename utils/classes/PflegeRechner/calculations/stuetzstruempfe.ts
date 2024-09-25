import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_KompressionsStruempfe(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    



	const kompressionsstrumpfe = data['Kompressionsstrümpfe'] as string;







            /// Kompressiumsstrümüfe
            if ( kompressionsstrumpfe === '1' ) {
                PflegeRechnerFields.fields.calculationResults.field_172_Kompressionsstrumpfe = 'Ja';
                PflegeRechnerFields.fields.calculationResults.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe = 
                2 * PflegeRechnerFields.fields.calculationFields.field_189_default_KompressionsstruempfeOderVerband;
    
            }
    }

