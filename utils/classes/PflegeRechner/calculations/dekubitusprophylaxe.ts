import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_Dekubitusprophylaxe(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    


    const mobilitaet = data['Mobilität'] as string;
	const lageAendern = data['LageÄndern'] as string;




     /// Dekubitusprophylaxe
     if ( 
        mobilitaet === '2' && lageAendern === '1' || 
        mobilitaet === '3' && lageAendern === '1' ) 
    {
        PflegeRechnerFields.fields.calculationResults.field_169_Dekubitusprophylaxe = 'Ja';
        PflegeRechnerFields.fields.calculationResults.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe = PflegeRechnerFields.fields.calculationFields.field_188_default_Dekubitusprophylaxe ;

    }

    
}
