import { SurveyResult } from '../../../../survey';
import { iahaCalculation } from '../PflegeRechnerCalculations';
import { PflegeRechnerFields } from '../PflegeRechnerFields';

// Assuming `data` is the input (SurveyResult)
export function Calculation_Min220Cap(data: SurveyResult) {
	// Call iahaCalculation to perform calculations
	

	// PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten = 
    // PflegeRechnerFields.fields.calculationResults.field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tagen * 3
    


        if (PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten > 220) {
            PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag = 220;
        } else {
            PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag = Math.round(PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten);
        }

        if (PflegeRechnerFields.fields.calculationResults.field_246_kanton_kann_abgerechnet_werden === "Ja") {
            PflegeRechnerFields.fields.calculationResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag = parseFloat((PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag / 60).toFixed(2));
        }

        if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 30) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 0;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 30 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 60) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 30;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 60 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 90) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 60;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 90 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 120) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 90;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 120 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 150) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 120;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 150 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 180) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 150;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 180) {
            PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 180;
        }



        if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 30) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 30;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 30 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 60) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 60;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 60 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 90) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 90;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 90 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 120) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 120;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 120 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 150) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 150;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 150 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 180) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 180;
        } else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 180) {
            PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 220;
        }

        PflegeRechnerFields.fields.calculationResults.field_261_Bruttolohn = Math.round((PflegeRechnerFields.fields.calculationResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag * 35) * 26);

}
