import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_TeilwaescheImBad(data: SurveyResult) { 
    




    const mobilitaet = data['Mobilität'] as string;
    const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
    const kognitiveProbleme = data['KognitiveProbleme'] as string;
    const aufstehenHinlegen = data['AufstehenHinlegen'] as string;


            ///TEILWÄSCHE IM BAD

            if (
                (mobilitaet === '1' && aufstehenHinlegen === '1') ||
                mobilitaet === '2' ||
                bewegungseinschraenkung === '1' ||
                bewegungseinschraenkung === '2' ||
                kognitiveProbleme === '2'
            ) {
                // Set the value for field_152_teilwaesche_im_bad
                PflegeRechnerFields.fields.calculationResults.field_152_teilwaesche_im_bad = 'Ja';
            
                // Calculate and set the value for field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad
                PflegeRechnerFields.fields.calculationResults.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad = 
                    (5 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_3_default_TeilwaescheAmLavabo) / 30;
            }

    
}
