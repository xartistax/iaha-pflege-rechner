import { SurveyResult } from '../../../../survey';
import { iahaCalculation } from '../PflegeRechnerCalculations';
import { PflegeRechnerFields } from '../PflegeRechnerFields';

// Assuming `data` is the input (SurveyResult)
export function Calculation_AufstehenHinlegen(data: SurveyResult) {
	// Call iahaCalculation to perform calculations
	

	const mobilitaet = data['Mobilität'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;
	const lageAendern = data['LageÄndern'] as string;

	/// Hilfe beim aufstehen und hinlegen

	if ((mobilitaet === '1' && aufstehenHinlegen === '1') || (mobilitaet === '2' && lageAendern === '0') || (mobilitaet === '3' && lageAendern === '0')) {
		PflegeRechnerFields.fields.calculationResults.field_168_Hilfe_beim_Aufstehen_und_Hinlegen = 'Ja';

		PflegeRechnerFields.fields.calculationResults.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen = PflegeRechnerFields.fields.calculationFields.field_186_default_AufstehenUndHinlegen * 2;
	}
}
