import { SurveyResult } from '../../../../survey';
import { iahaCalculation } from '../PflegeRechnerCalculations';
import { PflegeRechnerFields } from '../PflegeRechnerFields';

// Assuming `data` is the input (SurveyResult)
export function Calculation_Intimpflege(data: SurveyResult) {
	// Call iahaCalculation to perform calculations
	

	const mobilitaet = data['Mobilität'] as string;
	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;

	const inkontinenz = data['Inkontinenz'] as string;

	/// Intimpflege
	if (
		(inkontinenz === '1' && mobilitaet === '2') ||
		(inkontinenz === '2' && mobilitaet === '2') ||
		(inkontinenz === '3' && mobilitaet === '2') ||
		(inkontinenz === '1' && bewegungseinschraenkung === '1') ||
		(inkontinenz === '2' && bewegungseinschraenkung === '1') ||
		(inkontinenz === '3' && bewegungseinschraenkung === '1') ||
		(inkontinenz === '1' && bewegungseinschraenkung === '2') ||
		(inkontinenz === '2' && bewegungseinschraenkung === '2') ||
		(inkontinenz === '3' && bewegungseinschraenkung === '2')
	) {
		PflegeRechnerFields.fields.calculationResults.field_173_Intimpflege = 'Ja';
		PflegeRechnerFields.fields.calculationResults.field_200_pflegezeit_in_min_pro_tag_Intimpflege = PflegeRechnerFields.fields.calculationFields.field_5_default_IntimpflegeImBettOderAmLavabo;
	}
}
