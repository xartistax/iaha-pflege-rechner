import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_AnAusziehen(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    




    const mobilitaet = data['Mobilität'] as string;
	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;
	const lageAendern = data['LageÄndern'] as string;


        if (
            mobilitaet === "1" && aufstehenHinlegen === "1" ||
            mobilitaet === "2" ||
            mobilitaet === "3" && lageAendern === "0" ||
            bewegungseinschraenkung === "1" ||
            bewegungseinschraenkung === "2"

        ) {
            
            PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen = 'Ja';
            PflegeRechnerFields.fields.calculationResults.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen = 
            PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen * 2;

        }


    

            }

