import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_GehenUndStehen(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    



    const mobilitaet = data['Mobilität'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;

    

    /// Hilfe beim gehen und stehen
    if ( mobilitaet === '1' && aufstehenHinlegen === '1' ) {

        PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen = 'Ja';
        PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen = 
        PflegeRechnerFields.fields.calculationFields.field_191_default_HilfeBeimGehenUndStehen * 2;

    }
}
