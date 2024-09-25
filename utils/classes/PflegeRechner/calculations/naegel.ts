import { SurveyResult } from '../../../../survey';
import { iahaCalculation } from '../PflegeRechnerCalculations';
import { PflegeRechnerFields } from '../PflegeRechnerFields';

// Assuming `data` is the input (SurveyResult)
export function Calculation_Naegel(data: SurveyResult) {
	// Call iahaCalculation to perform calculations
	

	const mobilitaet = data['Mobilität'] as string;
	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;
	const lageAendern = data['LageÄndern'] as string;



	/// Fingernägel
	if ((mobilitaet === '1' && aufstehenHinlegen === '1') || (mobilitaet === '2' && lageAendern === '1') || (mobilitaet === '3' && lageAendern === '1') || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2') {
		PflegeRechnerFields.fields.calculationResults.field_210_Fingernaegel_schneiden = 'Ja';

		PflegeRechnerFields.fields.calculationResults.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden = (PflegeRechnerFields.fields.calculationFields.field_7_default_FingernaegelSchneiden * 2) / 30;
	}

	/// Zehnnägel
	if (mobilitaet === '1' || mobilitaet === '2' || mobilitaet === '3' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2') {
		PflegeRechnerFields.fields.calculationResults.field_161_Zehnaegel_schneiden = 'Ja';

		PflegeRechnerFields.fields.calculationResults.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden = (PflegeRechnerFields.fields.calculationFields.field_8_default_FussnaegelSchneiden * 1) / 30;
	}
}
