import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_Zahn(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    



    const mobilitaet = data['Mobilität'] as string;
    const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;

     /// Zahnpflege
     if ( mobilitaet === '3' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
        PflegeRechnerFields.fields.calculationResults.field_157_zahnpflege = 'Ja';

        PflegeRechnerFields.fields.calculationResults.field_197_pflegezeit_in_min_pro_tag_zahnpflege = 
        2 * PflegeRechnerFields.fields.calculationFields.field_9_default_TotalZahnpflege2xTaeglich;
    }
}
