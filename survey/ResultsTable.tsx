import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { CalculationResultsType } from '.';

interface ResultsTableProps {
    results: CalculationResultsType;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
    const rows = [
        /// Rechner 
        { label: 'Geschlecht', value: results.field_23_geschlecht },
        { label: 'Wie mobil ist die pflegebedürftige Person in Ihrem Zuhause?', value: results.field_24_mobilitaet },
        { label: 'Kann die pflegebedürftige Person selbständig vom Bett aufstehen oder sich hinlegen?', value: results.field_136_aufstehen_und_hinlegen },
        { label: 'Kann die pflegebedürftige Person ihre Lage (im Bett oder im Rollstuhl) selbst ändern?', value: results.field_137_lage_aendern },
        { label: 'Benutzt die pflegebedürftige Person Kompressionsstrümpfe?', value: results.field_139_kompressionsstrumpfe },
        { label: 'Gibt es Einschränkungen der Bewegungsfähigkeit des Oberkörpers und/oder der Arme/Hände?', value: results.field_25_bewegungseinschraenkung },
        { label: 'Leidet die pflegebedürftige Person unter kognitiven Problemen (Gedächtnisproblemen)?', value: results.field_83_kognitive_probleme },
        { label: 'Leidet die pflegebedürftige Person unter Inkontinenz?', value: results.field_138_inkontinenz },

        // Kanton Abgerechnet
        { label: 'Kanton', value: results.field_76_kanton },
        { label: 'Krankenkasse', value: results.field_78_krankenkasse },
        { label: 'Kanton Abrechnung möglich (0 = Nein, 1 = Ja)', value: results.field_246_kanton_kann_abgerechnet_werden },
        { label: 'Krankenkasse Abrechnung möglich (0 = Nein, 1 = Ja)', value: results.field_999_krankenkasse_kann_abgerechnet_werden },

        // Körperpflege im Bett
        { label: 'Körperpflege im Bett', value: results.field_153_koerperpflege_im_bett },
        { label: 'Pflegezeit in Min pro Tag - Ganzwäsche im Bett', value: results.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett },
        { label: 'Ganzwäsche im Bad', value: results.field_143_Ganzwaesche_im_bad },
        { label: 'Pflegezeit in Min pro Tag - Teilwäsche im Bett', value: results.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett },
        { label: 'Teilwäsche im Bad', value: results.field_152_teilwaesche_im_bad },
        { label: 'Pflegezeit in Minuten pro Tag - Teilwäsche im Bad', value: results.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad },

        // Haare Waschen
        { label: 'Haare Waschen', value: results.field_174_haare_waschen },
        { label: 'Pflegezeit in Minuten pro Tag - Haare Waschen', value: results.field_196_pflegezeit_in_min_pro_tag_haare_waschen },

        // Zahnpflege
        { label: 'Zahnpflege', value: results.field_157_zahnpflege },
        { label: 'Pflegezeit in Minuten pro Tag - Zahnpflege', value: results.field_197_pflegezeit_in_min_pro_tag_zahnpflege },

        // Fingernägel
        { label: 'Fingernägel Schneiden', value: results.field_210_Fingernaegel_schneiden },
        { label: 'Pflegezeit in Minuten pro Tag - Fingernägel Schneiden', value: results.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden },

        // Zehnägel
        { label: 'Zehnägel Schneiden', value: results.field_161_Zehnaegel_schneiden },
        { label: 'Pflegezeit in Minuten pro Tag - Zehnägel Schneiden', value: results.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden },

        // Toilettengang
        { label: 'Begleitung Toilettengang', value: results.field_165_Begleitung_Toilettengang },
        { label: 'Pflegezeit in Minuten pro Tag - Begleitung Toilettengang', value: results.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang },

        // Intimpflege
        { label: 'Intimpflege', value: results.field_173_Intimpflege },
        { label: 'Pflegezeit in Minuten pro Tag - Intimpflege', value: results.field_200_pflegezeit_in_min_pro_tag_Intimpflege },

        // Gehen und Stehen
        { label: 'Hilfe Beim Gehen und Stehen', value: results.field_166_HilfeBeimGehenUndStehen },
        { label: 'Pflegezeit in Minuten pro Tag - Hilfe Beim Gehen und Stehen', value: results.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen },

        // Lagerung im Bett
        { label: 'Lagerung im Bett', value: results.field_167_LagerungImBett },
        { label: 'Pflegezeit in Minuten pro Tag - Lagerung im Bett', value: results.field_202_pflegezeit_in_min_pro_tag_LagerungImBett },

        // Aufstehen und Hinlegen
        { label: 'Hilfe beim Aufstehen und Hinlegen', value: results.field_168_Hilfe_beim_Aufstehen_und_Hinlegen },
        { label: 'Pflegezeit in Minuten pro Tag - Hilfe beim Aufstehen und Hinlegen', value: results.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen },

        // An- und Ausziehen
        { label: 'Hilfe beim An- und Ausziehen', value: results.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen },
        { label: 'Pflegezeit in Minuten pro Tag - Hilfe beim An- und Ausziehen', value: results.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen },

        // Dekubitusprophylaxe
        { label: 'Dekubitusprophylaxe', value: results.field_169_Dekubitusprophylaxe },
        { label: 'Pflegezeit in Minuten pro Tag - Dekubitusprophylaxe', value: results.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe },

        // Unterstützung beim Essen und Trinken
        { label: 'Unterstützung beim Essen und Trinken', value: results.field_170_Unterstutzung_Essen_und_Trinken },
        { label: 'Pflegezeit in Minuten pro Tag - Unterstützung beim Essen und Trinken', value: results.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken },

        // Rasieren
        { label: 'Rasieren', value: results.field_171_Rasieren },
        { label: 'Pflegezeit in Minuten pro Tag - Rasieren', value: results.field_207_pflegezeit_in_min_pro_tag_Rasieren },

        // Kompressionsstrümpfe
        { label: 'Kompressionsstrümpfe', value: results.field_172_Kompressionsstrumpfe },
        { label: 'Pflegezeit in Minuten pro Tag - Kompressionsstrümpfe', value: results.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe },

        // Summe Pflegeleistung im Durchschnitt Brutto
        { label: 'Summe Pflegeleistung im Durchschnitt Brutto', value: results.field_81_Summe_Pflegeleistung_im_durchscnitt_brutto },

        // Korrektur bei Toilettengang und Hilfe beim Gehen
        { label: 'Korrektur bei Toilettengang und Hilfe beim Gehen', value: results.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen },

        // Korrektur bei Ganzwäsche und An- und Ausziehen
        { label: 'Korrektur bei Ganzwäsche und An- und Ausziehen', value: results.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen },

        // Korrektur bei Teilwäsche und An- und Ausziehen
        { label: 'Korrektur bei Teilwäsche und An- und Ausziehen', value: results.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen },

        // Korrektur bei Ganzwäsche und Kompressionsstrümpfe
        { label: 'Korrektur bei Ganzwäsche und Kompressionsstrümpfe', value: results.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe },

        // Summe Korrekturzeiten
        { label: 'Summe Korrekturzeiten', value: results.field_216_Summe_Korrekturzeiten },

        // Summe Pflegeleistung im Durchschnitt Netto
        { label: 'Summe Pflegeleistung im Durchschnitt Netto', value: results.field_217_Summe_Pflegeleistung_im_durchscnitt_netto },

        // Korrektur Faktor bei schwerer Demenz
        { label: 'Korrektur Faktor bei schwerer Demenz Gehhfähigkeit', value: results.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit },
        { label: 'Korrektur Faktor bei schwerer Demenz Rumpf/Arme', value: results.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme },
        { label: 'Ergebnis Korrektur Faktor Demenz', value: results.field_178_Ergebnis_KorrekturFaktor_Demenz },

        // Summe Durchschnittliche Pflegeleistungen in Minuten pro Tag vor CAP
        { label: 'Summe Durchschnittliche Pflegeleistungen in Minuten pro Tag vor CAP bei 220 Minuten', value: results.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten },

        // Durchschnittliche Pflegeleistungen in Minuten pro Tag
        { label: 'Durchschnittliche Pflegeleistungen in Minuten pro Tag', value: results.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag },

        // Summe Durchschnittliche Pflegeleistungen in Stunden pro Tag
        { label: 'Summe Durchschnittliche Pflegeleistungen in Stunden pro Tag', value: results.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag },

        // Definition Unterer und Oberer Bereich Pflegezeiten
        { label: 'Definition Unterer Bereich Pflegezeiten', value: results.field_259_Definition_unterer_Bereich_Pflegezeiten },
        { label: 'Definition Oberer Bereich Pflegezeiten', value: results.field_260_Definition_oberer_Bereich_Pflegezeiten },

        // Bruttolohn
        { label: 'Bruttolohn', value: results.field_261_Bruttolohn }
    ];

    const sections = [
        { section: 'Formular', items: rows.slice(0, 8), infoText: 'Reihenfolge der Positon im Dropdown! Beispiel: Geschlecht -> 0 = Männlich, 1 = Weiblich' },
        { section: 'Kanton && KK', items: rows.slice(8, 11) },
        { section: 'Körperpflege im Bett', items: rows.slice(11, 17) },
        { section: 'Haare Waschen', items: rows.slice(17, 19) },
        { section: 'Zahnpflege', items: rows.slice(19, 21) },
        { section: 'Fingernägel', items: rows.slice(21, 23) },
        { section: 'Zehnägel', items: rows.slice(23, 25) },
        { section: 'Toilettengang', items: rows.slice(25, 27) },
        { section: 'Intimpflege', items: rows.slice(27, 29) },
        { section: 'Gehen und Stehen', items: rows.slice(29, 31) },
        { section: 'Lagerung im Bett', items: rows.slice(31, 33) },
        { section: 'Aufstehen und Hinlegen', items: rows.slice(33, 35) },
        { section: 'An- und Ausziehen', items: rows.slice(35, 37) },
        { section: 'Dekubitusprophylaxe', items: rows.slice(37, 39) },
        { section: 'Unterstützung beim Essen und Trinken', items: rows.slice(39, 41) },
        { section: 'Rasieren', items: rows.slice(41, 43) },
        { section: 'Kompressionsstrümpfe', items: rows.slice(43, 45) },
        { section: 'Summe Pflegeleistung im Durchschnitt Brutto', items: rows.slice(45, 46) },
        { section: 'Korrektur', items: rows.slice(46, 51) },
        { section: 'Summe Pflegeleistung im Durchschnitt Netto', items: rows.slice(51, 52) },
        { section: 'Korrektur Faktor bei schwerer Demenz', items: rows.slice(52, 55) },
        { section: 'Summe Durchschnittliche Pflegeleistungen', items: rows.slice(55, 58) },
        { section: 'Definition Pflegezeiten', items: rows.slice(58, 60) },
        { section: 'Bruttolohn', items: rows.slice(60, 61), infoText: 'Optional information about Bruttolohn section' }
    ];

    return (
        <TableContainer component={Paper} elevation={0}>
            <Table>
                <TableBody>
                    {sections.map(({ section, items, infoText }) => (
                        <React.Fragment key={section}>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Typography variant="h6" component="div">
                                        {section}
                                    </Typography>
                                    {infoText && (
                                        <Typography variant="body2" color="textSecondary">
                                            {infoText}
                                        </Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                            {items.map((row) => (
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
