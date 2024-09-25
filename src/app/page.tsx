"use client";
import React, { useEffect, useState, useRef } from "react";
import "survey-core/defaultV2.min.css";
import { CalculationResultsType, surveyJson, SurveyResult } from "../../survey";
import { PlainLightPanelless } from "survey-core/themes";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { PflegeRechnerFields } from "../../utils/classes/PflegeRechner/PflegeRechnerFields";
import ResultsTable from "../../survey/ResultsTable";
import { Container, Box, Typography } from "@mui/material";
import { iahaCalculation } from "../../utils/classes/PflegeRechner/PflegeRechnerCalculations";

function Home() {
    const survey = new Model(surveyJson);
    survey.applyTheme(PlainLightPanelless);
    

    // State to track survey completion and store log data
    const [surveyCompleted, setSurveyCompleted] = useState(false);
    const [calculatedResults, setCalculatedResults] = useState<CalculationResultsType | null>(null);
    const [isClient, setIsClient] = useState(false);
    const resultsRef = useRef<HTMLDivElement>(null);


    const anrede = calculatedResults && calculatedResults.salutation === "Frau" ? "Sehr geehrte Frau" : "Sehr geehrter Herr";

    survey.onComplete.add((sender: { data: SurveyResult; }, options: any) => {
        const surveyData = sender.data as SurveyResult;

        // Perform calculations
        iahaCalculation(surveyData);
        
        // Update state with calculation results
        setCalculatedResults(PflegeRechnerFields.fields.calculationResults);
        setSurveyCompleted(true);
    });

    useEffect(() => {
        setIsClient(true); // This triggers when the component mounts (on client-side)
    }, []);

    useEffect(() => {
        if (surveyCompleted && resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [surveyCompleted]);




    useEffect(() => {
        if (calculatedResults) {
            console.log(calculatedResults)
          const sendResultsToApi = async () => {
            try {
            
              const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ;
              const response = await fetch(`${baseUrl}/api/zoho/lead/create`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        "data": [
                            {
                                "Layout": {
                                    "id": "655175000000032033"
                                },
                                
                                
                                    "Anrede": anrede,
                                    "Salutation": String(calculatedResults.salutation),
                                    "Geschlecht": String(calculatedResults.field_23_geschlecht),
                                    "First_Name" : String(calculatedResults.vorname),
                                    "Last_Name" : String(calculatedResults.nachname),
                                    "Phone" : String(calculatedResults.phone),
                                    "Email" : String(calculatedResults.email),
                                    "Mobilit_t": String(calculatedResults.field_24_mobilitaet),
                                    "Kompressionsstr_mpfe": String(calculatedResults.field_139_kompressionsstrumpfe),
                                    "Inkontinenz": String(calculatedResults.field_138_inkontinenz),
                                    "Lage_ndern": String(calculatedResults.field_137_lage_aendern),
                                    "Aufstehen_oder_hinlegen": String(calculatedResults.field_136_aufstehen_und_hinlegen),
                                    "Bewegungsf_higkeit": String(calculatedResults.field_25_bewegungseinschraenkung),
                                    "Krankenkasse": String(calculatedResults.field_78_krankenkasse),
                                    "Kanton": String(calculatedResults.field_76_kanton),
                                    "K_rperpflege_im_Bett": String(calculatedResults.field_153_koerperpflege_im_bett),
                                    "Pflegezeit_pro_Tag_Ganzw_sche_im_Bett": String(calculatedResults.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett),
                                    "Ganzw_sche_im_Bad": String(calculatedResults.field_143_Ganzwaesche_im_bad),
                                    "Pflegezeit_pro_Tag_Teilw_sche_im_Bett": String(calculatedResults.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett),
                                    "Teilw_sche_im_Bad": String(calculatedResults.field_152_teilwaesche_im_bad),
                                    "Pflegezeit_pro_Tag_Teilw_sche_im_Bad": String(calculatedResults.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad),
                                    "Kompressionsstrumpfe1": String(calculatedResults.field_172_Kompressionsstrumpfe),
                                    "T_gliche_Pflegezeit_Intimpflege": String(calculatedResults.field_200_pflegezeit_in_min_pro_tag_Intimpflege),
                                    "Intimpflege": String(calculatedResults.field_173_Intimpflege),
                                    "T_gliche_Pflegezeit_Hilfe_Beim_Gehen_und_Stehen": String(calculatedResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen),
                                    "Hilfe_Beim_Gehen_und_Stehen": String(calculatedResults.field_166_HilfeBeimGehenUndStehen),
                                    "T_gliche_Pflegezeit_Lagerung_im_Bett": String(calculatedResults.field_202_pflegezeit_in_min_pro_tag_LagerungImBett),
                                    "Lagerung_im_Bett": String(calculatedResults.field_167_LagerungImBett),
                                    "T_gliche_Pflegezeit_Hilfe_beim_Aufstehen_und_Hinl": String(calculatedResults.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen),
                                    "Hilfe_beim_Aufstehen_und_Hinlegen": String(calculatedResults.field_136_aufstehen_und_hinlegen),
                                    "T_gliche_Pflegezeit_Hilfe_beim_An_und_Ausziehen": String(calculatedResults.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen),
                                    "Hilfe_beim_An_und_Ausziehen": String(calculatedResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen),
                                    "T_gliche_Pflegezeit_Dekubitusprophylaxe": String(calculatedResults.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe),
                                    "Dekubitusprophylaxe": String(calculatedResults.field_169_Dekubitusprophylaxe),
                                    "T_gliche_Pflegezeit_Rasieren0": String(calculatedResults.field_207_pflegezeit_in_min_pro_tag_Rasieren),
                                    "Unterst_tzung_beim_Essen_und_Trinken": String(calculatedResults.field_170_Unterstutzung_Essen_und_Trinken),
                                    "T_gliche_Pflegezeit_Unterst_tzung_beim_Essen_und": String(calculatedResults.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken),
                                    "Rasieren": String(calculatedResults.field_171_Rasieren),
                                    "T_gliche_Pflegezeit_Kompressionsstr_mp": String(calculatedResults.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe),
                                    "Toilettengang_und_Hilfe_beim_Gehen": String(calculatedResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen),
                                    "Korrektur_bei_Ganzw_sche_und_An_und_Ausziehen": String(calculatedResults.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen),
                                    "Korrektur_bei_Teilw_sche_und_An_und_Ausziehen": String(calculatedResults.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen),
                                    "Korrektur_bei_Ganzw_sche_und_Kompressionsstr_mpfe": String(calculatedResults.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe),
                                    "Summe_Korrekturzeiten": String(calculatedResults.field_216_Summe_Korrekturzeiten),
                                    "Korrektur_Faktor_bei_schwerer_Demenz_Gehhf_higkeit": String(calculatedResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit),
                                    "Korrektur_Faktor_bei_schwerer_Demenz_Rumpf_Arme": String(calculatedResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme),
                                    "Ergebnis_Korrektur_Faktor_Demenz": String(calculatedResults.field_178_Ergebnis_KorrekturFaktor_Demenz),
                                    "Brutto1": String(calculatedResults.field_81_Summe_Pflegeleistung_in_Minuten_an_30_Tagen_vor_abzug_demenz),
                                    "Netto1": String(calculatedResults.field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tagen),
                                    "Summe_Durchschnittliche_Pflegeleistungen_in_Minute": String(calculatedResults.field_216_Summe_Korrekturzeiten),
                                    "Durchschnittliche_Pflegeleistungen_in_Minuten_pro": String(calculatedResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten),
                                    "Summe_Durchschnittliche_Pflegeleistungen_in_Stunde": String(calculatedResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag),
                                    "Definition_Unterer_Bereich_Pflegezeiten": String(calculatedResults.field_259_Definition_unterer_Bereich_Pflegezeiten),
                                    "Definition_Oberer_Bereich_Pflegezeiten": String(calculatedResults.field_260_Definition_oberer_Bereich_Pflegezeiten),
                                    "Bruttolohn" : String(calculatedResults.field_261_Bruttolohn),
                                    "Kanton_abrechnung": String(calculatedResults.field_246_kanton_kann_abgerechnet_werden),
                                    "Krankenkasse_abrechnung": String(calculatedResults.field_999_krankenkasse_kann_abgerechnet_werden),
                                    "Kognitive_Probleme" : String(calculatedResults.field_83_kognitive_probleme)
                            
                                
                    
                                
                    
                    
                    
                            }
                        ],
                        "apply_feature_execution": [
                            {
                                "name": "layout_rules"
                            }
                        ],
                        "trigger": [
                            "approval",
                            "workflow",
                            "blueprint",
                            "pathfinder",
                            "orchestration"
                        ]
                    }
                    
                ),
              });
      
              if (!response.ok) {
                const error = await response.text();
                console.error('Error sending results to API:', error);
              } else {
                const responseData = await response.json();
                console.log('API response:', responseData);
              }
            } catch (error) {
              console.error('Error making API request:', error);
            }
          };
      
          // Call the function to send the results to the API
          sendResultsToApi();
        }
      }, [calculatedResults]);





























    return (
        <Container id="SurveyMain" maxWidth="md" sx={{ mt: 3 }}>
            <Box>
                {/* Render Survey */}
                {isClient && (
                    <>
                        <Typography variant="h2" gutterBottom>
                            IAHA Pflegerechner v3
                        </Typography>
                        <Survey model={survey} />
                    </>  
                )}

                {/* Conditionally render the results table only after the survey is completed */}
                {surveyCompleted && calculatedResults && (
                    <Box mt={4} ref={resultsRef}>
                       
                        <ResultsTable results={calculatedResults} />

                    </Box>
                )}
            </Box>
        </Container>
    );
}

export default Home;
