import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_DurchschnittlichePflegeleistungenInMinutenAn30Tage(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    




     /// field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tage

     PflegeRechnerFields.fields.calculationResults.field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tagen =
     parseFloat(
         (PflegeRechnerFields.fields.calculationResults.field_81_Summe_Pflegeleistung_in_Minuten_an_30_Tagen_vor_abzug_demenz - 
          PflegeRechnerFields.fields.calculationResults.field_216_Summe_Korrekturzeiten).toFixed(2) // Use toFixed after subtraction
     );


    

            }

