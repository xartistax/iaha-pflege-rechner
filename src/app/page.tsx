"use client";
import React, { useEffect, useState, useRef } from "react";
import "survey-core/defaultV2.min.css";
import { CalculationResultsType, surveyJson, SurveyResult } from "../../survey";
import { PlainLightPanelless } from "survey-core/themes";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { PflegeRechnerCalculations } from "../../utils/classes/PflegeRechner/PflegeRechnerCalculations";
import { PflegeRechnerFields } from "../../utils/classes/PflegeRechner/PflegeRechnerFields";
import ResultsTable from "../../survey/ResultsTable";
import { Container, Box, Typography } from "@mui/material";

function Home() {
    const survey = new Model(surveyJson);
    survey.applyTheme(PlainLightPanelless);

    // State to track survey completion and store log data
    const [surveyCompleted, setSurveyCompleted] = useState(false);
    const [calculatedResults, setCalculatedResults] = useState<CalculationResultsType | null>(null);
    const [isClient, setIsClient] = useState(false);
    const resultsRef = useRef<HTMLDivElement>(null);

    survey.onComplete.add((sender: { data: SurveyResult; }, options: any) => {
        const surveyData = sender.data as SurveyResult;

        // Perform calculations
        PflegeRechnerCalculations.iahaCalculation(surveyData);
        
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

    return (
        <Container id="SurveyMain" maxWidth="md" sx={{ mt: 3 }}>
            <Box>
                {/* Render Survey */}
                {isClient && (
                    <>
                        <Typography variant="h2" gutterBottom>
                            IAHA Pflegerechner
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
