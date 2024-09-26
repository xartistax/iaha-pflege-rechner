import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_DurchschnittlichePflegeleistungenInMinutenProTag() { 
    // Call iahaCalculation to perform calculations
    




    if (PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten > 220) {
        PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag = 220;
    } else {
        PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag = Math.round(PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten);
    }

    /// In Stunden
    if (PflegeRechnerFields.fields.calculationResults.field_246_kanton_kann_abgerechnet_werden === "Ja") {
        PflegeRechnerFields.fields.calculationResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag = parseFloat((PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag / 60).toFixed(2));
    }





    

            }

