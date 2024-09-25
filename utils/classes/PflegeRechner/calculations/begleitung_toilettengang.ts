import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_Toilettengang(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    



    const mobilitaet = data['Mobilität'] as string;
	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;

    

    /// Begleitung Toilettengang
    if ( mobilitaet === '1' && aufstehenHinlegen === '1' || mobilitaet === '2' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
        PflegeRechnerFields.fields.calculationResults.field_165_Begleitung_Toilettengang = 'Ja';

        PflegeRechnerFields.fields.calculationResults.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang = 
        PflegeRechnerFields.fields.calculationFields.field_192_default_HilfeBeimToilettengang * 2;

    }
}
