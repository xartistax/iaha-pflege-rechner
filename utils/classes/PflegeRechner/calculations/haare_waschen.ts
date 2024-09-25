import { SurveyResult } from "../../../../survey";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_HaareWaschen(data: SurveyResult) {
    // Call iahaCalculation to perform calculations



    const mobilitaet = data['Mobilität'] as string;
    const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;

    // Now you can check if the kanton is in the array
    if ((mobilitaet === '1' && aufstehenHinlegen === '1') || mobilitaet === '2' || mobilitaet === '3' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2') {
        PflegeRechnerFields.fields.calculationResults.field_174_haare_waschen = 'Ja';
        PflegeRechnerFields.fields.calculationResults.field_196_pflegezeit_in_min_pro_tag_haare_waschen = (4.3333 * PflegeRechnerFields.fields.calculationFields.field_6_default_HaareWaschen) / 30;
      }
}
