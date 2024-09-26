import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_DurchschnittlichePflegeleistungenInMinutenProTag220CAP() { 
    // Call iahaCalculation to perform calculations
    




    PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten =
    parseFloat(
        (PflegeRechnerFields.fields.calculationResults.field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tagen * 
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz).toFixed(1)
    );






    

            }

