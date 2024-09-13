import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { CalculationResultsType } from '.';


// survey/index.ts




interface ResultsTableProps {
    results: CalculationResultsType;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
    const rows = [
        { label: 'Kanton Abgerechnet', value: results.field_246_kann_abgerechnet_werden },
        { label: 'Körperpflege im Bett', value: results.field_153_koerperpflege_im_bett },
        { label: 'Pflegezeit in Minuten pro Tag Körperpflege im Bett', value: results.field_184_pflegezeit_in_min_pro_tag_koerperpflege_im_bett },
        { label: 'Ganzwäsche im Bett', value: results.field_143_Ganzwaesche_im_bad },
        { label: 'Pflegezeit in Minuten pro Tag Ganzwäsche im Bett', value: results.field_194_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bett },
        { label: 'Teilwäsche im Bad', value: results.field_152_teilwaesche_im_bad },
        { label: 'Pflegezeit in Minuten pro Tag Teilwäsche im Bad', value: results.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad },
        { label: 'Haare Waschen', value: results.field_174_haare_waschen },
        { label: 'Pflegezeit in Minuten pro Tag Haare Waschen', value: results.field_196_pflegezeit_in_min_pro_tag_haare_waschen },
        { label: 'Zahnpflege', value: results.field_157_zahnpflege },
        { label: 'Pflegezeit in Minuten pro Tag Zahnpflege', value: results.field_197_pflegezeit_in_min_pro_tag_zahnpflege },
        { label: 'Fingernägel Schneiden', value: results.field_210_Fingernaegel_schneiden },
        { label: 'Pflegezeit in Minuten pro Tag Fingernägel Schneiden', value: results.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden },
        { label: 'Zehnägel Schneiden', value: results.field_161_Zehnaegel_schneiden },
        { label: 'Pflegezeit in Minuten pro Tag Zehnägel Schneiden', value: results.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden },
        { label: 'Begleitung Toilettengang', value: results.field_165_Begleitung_Toilettengang },
        { label: 'Pflegezeit in Minuten pro Tag Begleitung Toilettengang', value: results.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang },
        { label: 'Intimpflege', value: results.field_173_Intimpflege },
        { label: 'Pflegezeit in Minuten pro Tag Intimpflege', value: results.field_200_pflegezeit_in_min_pro_tag_Intimpflege },
        { label: 'Hilfe Beim Gehen und Stehen', value: results.field_166_HilfeBeimGehenUndStehen },
        { label: 'Pflegezeit in Minuten pro Tag Hilfe Beim Gehen und Stehen', value: results.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen },
        { label: 'Lagerung im Bett', value: results.field_167_LagerungImBett },
        { label: 'Pflegezeit in Minuten pro Tag Lagerung im Bett', value: results.field_202_pflegezeit_in_min_pro_tag_LagerungImBett },
        { label: 'Hilfe beim Aufstehen und Hinlegen', value: results.field_168_Hilfe_beim_Aufstehen_und_Hinlegen },
        { label: 'Pflegezeit in Minuten pro Tag Hilfe beim Aufstehen und Hinlegen', value: results.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen },
        { label: 'Hilfe beim An- und Ausziehen', value: results.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen },
        { label: 'Pflegezeit in Minuten pro Tag Hilfe beim An- und Ausziehen', value: results.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen },
        { label: 'Dekubitusprophylaxe', value: results.field_169_Dekubitusprophylaxe },
        { label: 'Pflegezeit in Minuten pro Tag Dekubitusprophylaxe', value: results.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe },
        { label: 'Unterstützung beim Essen und Trinken', value: results.field_170_Unterstutzung_Essen_und_Trinken },
        { label: 'Pflegezeit in Minuten pro Tag Unterstützung beim Essen und Trinken', value: results.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken },
        { label: 'Rasieren', value: results.field_171_Rasieren },
        { label: 'Pflegezeit in Minuten pro Tag Rasieren', value: results.field_207_pflegezeit_in_min_pro_tag_Rasieren },
        { label: 'Kompressionsstrümpfe', value: results.field_172_Kompressionsstrumpfe },
        { label: 'Pflegezeit in Minuten pro Tag Kompressionsstrümpfe', value: results.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe },
        { label: 'Summe Pflegeleistung im Durchschnitt Brutto', value: results.field_81_Summe_Pflegeleistung_im_durchscnitt_brutto },
        { label: 'Korrektur bei Toilettengang und Hilfe beim Gehen', value: results.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen },
        { label: 'Korrektur bei Ganzwäsche und An- und Ausziehen', value: results.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen },
        { label: 'Korrektur bei Teilwäsche und An- und Ausziehen', value: results.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen },
        { label: 'Korrektur bei Ganzwäsche und Kompressionsstrümpfe', value: results.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe },
        { label: 'Summe Korrekturzeiten', value: results.field_216_Summe_Korrekturzeiten },
        { label: 'Summe Pflegeleistung im Durchschnitt Netto', value: results.field_217_Summe_Pflegeleistung_im_durchscnitt_netto },
        { label: 'Korrektur Faktor bei schwerer Demenz Gehhfähigkeit', value: results.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit },
        { label: 'Korrektur Faktor bei schwerer Demenz Rumpf/Arme', value: results.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme },
        { label: 'Ergebnis Korrektur Faktor Demenz', value: results.field_178_Ergebnis_KorrekturFaktor_Demenz },
        { label: 'Summe Durchschnittliche Pflegeleistungen in Minuten pro Tag vor CAP bei 220 Minuten', value: results.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten },
        { label: 'Durchschnittliche Pflegeleistungen in Minuten pro Tag', value: results.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag },
        { label: 'Summe Durchschnittliche Pflegeleistungen in Stunden pro Tag', value: results.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag },
        { label: 'Definition Unterer Bereich Pflegezeiten', value: results.field_259_Definition_unterer_Bereich_Pflegezeiten },
        { label: 'Definition Oberer Bereich Pflegezeiten', value: results.field_260_Definition_oberer_Bereich_Pflegezeiten },
        { label: 'Bruttolohn', value: results.field_261_Bruttolohn }
    ];
    

    return (
        <TableContainer component={Paper} sx={{padding: 20}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Beschreibung</TableCell>
                        <TableCell align="right">Wert</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.label}>
                            <TableCell component="th" scope="row">
                                {row.label}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
