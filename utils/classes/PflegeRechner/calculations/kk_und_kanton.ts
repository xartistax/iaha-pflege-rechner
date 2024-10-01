import { SurveyResult } from "../../../../survey";
import { kantonAbgerechnetJa, krankenkassenAbgerechnetJa } from "../krankenkassen";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_KkUndKanton(data: SurveyResult) {
    // Call iahaCalculation to perform calculations
    

    // Access `kanton` directly from `data`
    const kanton = data['Kanton'];
    const kk = data['Krankenkasse'];

    // Now you can check if the kanton is in the array
    if (krankenkassenAbgerechnetJa.includes(kk)) {
        PflegeRechnerFields.fields.calculationResults.field_999_krankenkasse_kann_abgerechnet_werden = 'Ja';
    }
    if (kantonAbgerechnetJa.includes(kanton)) {
		PflegeRechnerFields.fields.calculationResults.field_246_kanton_kann_abgerechnet_werden = 'Ja';
	}
}
