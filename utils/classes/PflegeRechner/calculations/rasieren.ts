import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_Rasieren(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    


	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;
	const geschlecht = data['Geschlecht'] as string;






             /// Rasieren
             if ( 
                geschlecht === '0' && kognitiveProbleme === '2' || geschlecht === '0' && bewegungseinschraenkung === '1' ||  geschlecht === '0' && bewegungseinschraenkung === '2' ) {
                PflegeRechnerFields.fields.calculationResults.field_171_Rasieren = 'Ja';
                PflegeRechnerFields.fields.calculationResults.field_207_pflegezeit_in_min_pro_tag_Rasieren = 
                (4 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_10_default_RasurInKombinationMitGanzOderTeilwaesche) / 30;
    
            }
    }

