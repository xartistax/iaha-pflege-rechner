import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_EssenTrinken(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    



	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;





      /// Unterstützung Essen und trinken
    if ( bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
        PflegeRechnerFields.fields.calculationResults.field_170_Unterstutzung_Essen_und_Trinken = 'Ja';
        PflegeRechnerFields.fields.calculationResults.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken = PflegeRechnerFields.fields.calculationFields.field_190_default_BeiEssenTrinkenUnterstuetzen * 2;

    }

    
}
