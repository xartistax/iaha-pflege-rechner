import { SurveyResult } from '../../../../survey';
import { iahaCalculation } from '../PflegeRechnerCalculations';
import { PflegeRechnerFields } from '../PflegeRechnerFields';

// Assuming `data` is the input (SurveyResult)
export function Calculation_BruttoLohn() {
	// Call iahaCalculation to perform calculations
	

	

	PflegeRechnerFields.fields.calculationResults.field_261_Bruttolohn = Math.round((PflegeRechnerFields.fields.calculationResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag * 35) * 26);
}
