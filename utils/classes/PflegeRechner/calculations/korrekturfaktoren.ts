import { SurveyResult } from "../../../../survey";
import { iahaCalculation } from "../PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../PflegeRechnerFields";

// Assuming `data` is the input (SurveyResult)
export function Calculation_Korrekturfaktoren(data: SurveyResult) { 
    // Call iahaCalculation to perform calculations
    



    const mobilitaet = data['Mobilität'] as string;
	const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
	const kognitiveProbleme = data['KognitiveProbleme'] as string;
	const aufstehenHinlegen = data['AufstehenHinlegen'] as string;



     /// GEHFÄHIGKEIT

     if (kognitiveProbleme === '2' && mobilitaet === '0') {
        PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 0.7;
    } else if (kognitiveProbleme === '2' && mobilitaet === '2') {
        PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 1.1;
    } else if (kognitiveProbleme === '2' && mobilitaet === '3') {
        PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 1.1;
    } else if (kognitiveProbleme === '2' && mobilitaet === '1' && aufstehenHinlegen === '0') {
        PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 0.7;
    } else if (kognitiveProbleme === '2' && mobilitaet === '1' && aufstehenHinlegen === '1') {
        PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 1.1;
    }



    /// RUMPF UND ARME
    if (kognitiveProbleme === '2' && bewegungseinschraenkung === '0') {
        PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme = 0.7;
    } else if (kognitiveProbleme === '2' && bewegungseinschraenkung === '1') {
        PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme = 1.1;
    } else if (kognitiveProbleme === '2' && bewegungseinschraenkung === '2') {
        PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme = 1.1;
    }



    /// DEMENZ

    if (kognitiveProbleme === '2' && 
        mobilitaet === '0') {
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 0.7;
    } else if (kognitiveProbleme === '2' && 
               mobilitaet === '2') {
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1.1;
    } else if (kognitiveProbleme === '2' && 
               mobilitaet === '3') {
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1.1;
    } else if (kognitiveProbleme === '2' && 
               mobilitaet === '1' && 
               aufstehenHinlegen === '0') {
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 0.7;
    } else if (PflegeRechnerFields.fields.calculationResults.field_83_kognitive_probleme === '2' && 
               mobilitaet === '1' && 
               aufstehenHinlegen=== '1') {
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1.1;
    } else {
        PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1;
    }


    

            }

