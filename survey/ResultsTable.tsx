import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';
import { CalculationResultsType } from '.';

interface ResultsTableProps {
    results: CalculationResultsType;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
    const sections = [
        {
            section: 'Form Infos',
            items: [
                { label: 'Geschlecht', value: results.field_23_geschlecht },
                { label: 'Mobilität', value: results.field_24_mobilitaet },
                { label: 'Aufstehen und Hinlegen', value: results.field_136_aufstehen_und_hinlegen },
                { label: 'Lage ändern', value: results.field_137_lage_aendern },
                { label: 'Kompressionsstrümpfe', value: results.field_139_kompressionsstrumpfe },
                { label: 'Bewegungseinschränkung', value: results.field_25_bewegungseinschraenkung },
                { label: 'Kognitive Probleme', value: results.field_83_kognitive_probleme },
                { label: 'Inkontinenz', value: results.field_138_inkontinenz }
            ]
        },
        {
            section: 'Körperpflege',
            items: [
                { label: 'Körperpflege im Bett', value: results.field_153_koerperpflege_im_bett },
                { label: 'Ganzwäsche im Bad', value: results.field_143_Ganzwaesche_im_bad },
                { label: 'Teilwäsche im Bad', value: results.field_152_teilwaesche_im_bad},
                { label: 'Pflegezeit in Min pro Tag- Ganzwäsche im Bett', value: results.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett },
                { label: 'Pflegezeit in Min pro Tag - Teilwäsche im Bett', value: results.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett },
                { label: 'Pflegezeit in Min pro Tag - Ganzwäsche im Bad', value: results.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad},
                { label: 'Pflegezeit in Min pro Tag - Teilwäsche im Bad', value: results.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad },

            ]
        },
        {
            section: 'Weitere Dienstleistungen und Pflegezeiten',
            items: [
                { label: 'Haare waschen', value: results.field_174_haare_waschen },
                { label: 'Pflegezeit in Min pro Tag - Haare waschen', value: results.field_196_pflegezeit_in_min_pro_tag_haare_waschen },
                { label: 'Zahnpflege', value: results.field_157_zahnpflege },
                { label: 'Pflegezeit in Min pro Tag - 2x Zahnpflege', value: results.field_197_pflegezeit_in_min_pro_tag_zahnpflege },
                { label: 'Fingernägel', value: results.field_210_Fingernaegel_schneiden },
                { label: 'Pflegezeit in Min pro Tag - Fingernägel schneiden', value: results.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden },
                { label: 'Zehnnägel', value: results.field_161_Zehnaegel_schneiden },
                { label: 'Pflegezeit in Min pro Tag - Zehennägel schneiden', value: results.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden },
                { label: 'Begleitung Toilettengang', value: results.field_165_Begleitung_Toilettengang },
                { label: 'Pflegezeit in Min pro Tag - Begleitung Toilettengang', value: results.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang },
                { label: 'Intimpflege', value: results.field_173_Intimpflege },
                { label: 'Pflegezeit in Min pro Tag - Intimpflege', value: results.field_200_pflegezeit_in_min_pro_tag_Intimpflege },
                { label: 'Hilfe beim Gehen & Stehen', value: results.field_166_HilfeBeimGehenUndStehen },
                { label: 'Pflegezeit in Min pro Tag - ilfe beim Gehen & Stehen', value: results.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen },


                { label: 'Lagerung im Bett', value: results.field_167_LagerungImBett },
                { label: 'Pflegezeit in Min pro Tag - Lagerung im Bett', value: results.field_202_pflegezeit_in_min_pro_tag_LagerungImBett },

                { label: 'Hilfe beim Aufstehen & Hinlegen', value: results.field_168_Hilfe_beim_Aufstehen_und_Hinlegen },
                { label: 'Pflegezeit in Min pro Tag - Hilfe beim Aufstehen & Hinlegen', value: results.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen },

                { label: 'Hilfe beim An- & Ausziehen', value: results.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen },
                { label: 'Pflegezeit in Min pro Tag - Hilfe beim An- & Ausziehen', value: results.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen },

                { label: 'Dekubitusprophylaxe', value: results.field_169_Dekubitusprophylaxe },
                { label: 'Pflegezeit in Min pro Tag - Dekubitusprophylaxe', value: results.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe },

                { label: 'Unterstützung Essen & Trinken', value: results.field_170_Unterstutzung_Essen_und_Trinken },
                { label: 'Pflegezeit in Min pro Tag - Unterstützung Essen & Trinken', value: results.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken },

                { label: 'Rasieren', value: results.field_171_Rasieren },
                { label: 'Pflegezeit in Min pro Tag - Rasieren', value: results.field_207_pflegezeit_in_min_pro_tag_Rasieren },

                { label: 'Kompressionsstrümpfe', value: results.field_172_Kompressionsstrumpfe },
                { label: 'Pflegezeit in Min pro Tag - Kompressionsstrümpfe', value: results.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe },
            ]
        },
        {
            section: 'Summen',
            items: [
                { label: 'durchschnittliche Pflegeleistungen in Minuten an 30 Tagen vor Abzug für Korrekturen & Demenzfaktor', value: results.field_81_Summe_Pflegeleistung_in_Minuten_an_30_Tagen_vor_abzug_demenz },
                { label: 'durchschnittliche Pflegeleistungen in Minuten an 30 Tagen', value: results.field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tagen  },
                { label: 'durchschnittliche Pflegeleistungen in Minuten pro Tag vor "Cap" bei 220 Minuten', value: results.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten },
                { label: 'durchschnittliche Pflegeleistungen in Minuten pro Tag', value: results.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag },
                { label: ' durchschnittliche Pflegeleistungen in Stunden pro Tag', value: results.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag },
                { label: 'Korrekturzeiten', value: results.field_216_Summe_Korrekturzeiten },
               

            ]
        },
        {
            section: 'Korrekturen',
            items: [
                { label: 'Toilettengang + Hilfe beim Gehen', value: results.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen },
                { label: 'Ganzwäsche + An- & Ausziehen', value: results.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen },
                { label: 'Teilwäsche + An- & Ausziehen', value: results.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen },
                { label: 'Ganzwäsche + Kompressionsstrümpfe', value: results.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe },
                { label: 'Ganzwäsche + An- & Ausziehen', value: results.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen },
                { label: 'Teilwäsche + An- & Ausziehen', value: results.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen },
                { label: 'Korrektur-Faktor bei schwerer Demenz - Gehfähigkeit', value: results.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit },
                { label: 'Korrektur-Faktor bei schwerer Demenz - Rumpf & Arme', value: results.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme },
                { label: 'Ergebnis: Demenz-Korrektur-Faktor (1.1 = Zeit-Zuschlag, 0.7  = Zeit-Abzug): 1', value: results.field_178_Ergebnis_KorrekturFaktor_Demenz },
               

            ]
        },
        {
            section: 'Weiteres',
            items: [
                { label: 'Definition unterer Bereich Pflegezeiten', value: results.field_259_Definition_unterer_Bereich_Pflegezeiten },
                { label: 'Definition oberer Bereich Pflegezeiten', value: results.field_260_Definition_oberer_Bereich_Pflegezeiten },
                { label: 'Bruttolohn', value: results.field_261_Bruttolohn }
               
            ]
        }
        

       


       


       

       
        
    ];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {sections.map((sectionData) => (
                        <React.Fragment key={sectionData.section}>
                            {/* Section Title */}
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Typography variant="h6">{sectionData.section}</Typography>
                                </TableCell>
                            </TableRow>
                            {/* Rows for each section */}
                            {sectionData.items.map((row) => (
                                <TableRow key={row.label}>
                                    <TableCell>{row.label}</TableCell>
                                    <TableCell align="right">{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
