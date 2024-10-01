import { SurveyResult } from '../../../survey';
import { PflegeRechnerFields } from './PflegeRechnerFields';
import { Calculation_Min220Cap } from './calculations/220minCap';
import { Calculation_AnAusziehen } from './calculations/an_und_ausziehen';
import { Calculation_AufstehenHinlegen } from './calculations/aufstehen_und_hinlegen';
import { Calculation_Toilettengang } from './calculations/begleitung_toilettengang';
import { Calculation_Dekubitusprophylaxe } from './calculations/dekubitusprophylaxe';
import { Calculation_DurchschnittlichePflegeleistungenInMinutenAn30Tage } from './calculations/durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tage';
import { Calculation_DurchschnittlichePflegeleistungenInMinutenProTag } from './calculations/durchschnittliche_pflegeleistungen_in_minuten_pro_tag';
import { Calculation_DurchschnittlichePflegeleistungenInMinutenProTag220CAP } from './calculations/durchschnittliche_pflegeleistungen_in_minuten_pro_tag_220_cap';
import { Calculation_EssenTrinken } from './calculations/essen_und_trinken';
import { Calculation_GanzwaescheImBad } from './calculations/ganzwaesche_Im_Bad';
import { Calculation_GanzwaescheTeilwaescheImBett } from './calculations/ganzwaesche_teilwaesche_im_bett';
import { Calculation_GehenUndStehen } from './calculations/gehen_und_stehen';
import { Calculation_HaareWaschen } from './calculations/haare_waschen';
import { Calculation_Intimpflege } from './calculations/intimpflege';
import { Calculation_KkUndKanton } from './calculations/kk_und_kanton';
import { Calculation_KoerperpflegeImBett } from './calculations/koerperpflege_im_bett';
import { Calculation_Korekturen } from './calculations/korrekturen';
import { Calculation_Korrekturfaktoren } from './calculations/korrekturfaktoren';
import { Calculation_LagerungImBett } from './calculations/lagerung_im_bett';
import { Calculation_BruttoLohn } from './calculations/lohn';
import { Calculation_Naegel } from './calculations/naegel';
import { Calculation_Rasieren } from './calculations/rasieren';
import { Calculation_KompressionsStruempfe } from './calculations/stuetzstruempfe';
import { Calculation_Summen } from './calculations/summen';
import { Calculation_TeilwaescheImBad } from './calculations/teilwaesche_im_bad';
import { Calculation_Zahn } from './calculations/zahnpflege';
import { mobilitaetLookup, aufstehenHinlegenLookup, lageAendernLookup, kompressionsstrumpfeLookup, bewegungseinschraenkungLookup, kognitiveProblemeLookup, inkontinenzLookup, geschlechtLookup } from './lookups';


export function iahaCalculation(data: SurveyResult) {
    const mobilitaet = data['Mobilität'] as string;
    const bewegungseinschraenkung = data['Bewegungseinschränkung'] as string;
    const kognitiveProbleme = data['KognitiveProbleme'] as string;
    const aufstehenHinlegen = data['AufstehenHinlegen'] as string;
    const lageAendern = data['LageÄndern'] as string;
    const inkontinenz = data['Inkontinenz'] as string;
    const geschlecht = data['Geschlecht'] as string;
    const kompressionsstrumpfe = data['Kompressionsstrümpfe'] as string;
    const kanton = data['Kanton'] as string;
    const krankenkasse = data['Krankenkasse'] as string;
    const salutation = data['anrede'] as string;
    const firstName = data['vorname'] as string;
    const lastName = data['nachname'] as string;
    const phone = data['phone'] as string;
    const email = data['email'] as string;

    const mobilitaetText = mobilitaetLookup[mobilitaet] || 'N/A';
    const bewegungseinschraenkungText = bewegungseinschraenkungLookup[bewegungseinschraenkung] || 'N/A';
    const kognitiveProblemeText = kognitiveProblemeLookup[kognitiveProbleme] || 'N/A';
    const aufstehenHinlegenText = aufstehenHinlegenLookup[aufstehenHinlegen] || 'N/A';
    const lageAendernText = lageAendernLookup[lageAendern] || 'N/A';
    const inkontinenzText = inkontinenzLookup[inkontinenz] || 'N/A';
    const kompressionsText = kompressionsstrumpfeLookup[kompressionsstrumpfe] || 'N/A';
    const geschlechtText = geschlechtLookup[geschlecht] || 'N/A';

    /// Directly Map KK And Kanton
    PflegeRechnerFields.fields.calculationResults.field_76_kanton = kanton;
    PflegeRechnerFields.fields.calculationResults.field_78_krankenkasse = krankenkasse;
    PflegeRechnerFields.fields.calculationResults.field_24_mobilitaet = mobilitaetText;
    PflegeRechnerFields.fields.calculationResults.field_25_bewegungseinschraenkung = bewegungseinschraenkungText;
    PflegeRechnerFields.fields.calculationResults.field_83_kognitive_probleme = kognitiveProblemeText;
    PflegeRechnerFields.fields.calculationResults.field_136_aufstehen_und_hinlegen = aufstehenHinlegenText;
    PflegeRechnerFields.fields.calculationResults.field_137_lage_aendern = lageAendernText;
    PflegeRechnerFields.fields.calculationResults.field_138_inkontinenz = inkontinenzText;
    PflegeRechnerFields.fields.calculationResults.field_23_geschlecht = geschlechtText;
    PflegeRechnerFields.fields.calculationResults.field_139_kompressionsstrumpfe = kompressionsText;
    PflegeRechnerFields.fields.calculationResults.salutation = salutation;
    PflegeRechnerFields.fields.calculationResults.vorname = firstName;
    PflegeRechnerFields.fields.calculationResults.nachname = lastName;
    PflegeRechnerFields.fields.calculationResults.phone = phone;
    PflegeRechnerFields.fields.calculationResults.email = email;

    /// KÖRPERPFLEGE
	Calculation_KoerperpflegeImBett(data)
	Calculation_GanzwaescheImBad(data)
	Calculation_TeilwaescheImBad(data)
	Calculation_GanzwaescheTeilwaescheImBett()

	/// PFLEGEFELDER
    Calculation_HaareWaschen(data);
    Calculation_Zahn(data);
    Calculation_Naegel(data);
    Calculation_Toilettengang(data);
    Calculation_Intimpflege(data);
    Calculation_GehenUndStehen(data);
    Calculation_LagerungImBett(data);
    Calculation_AufstehenHinlegen(data);
    Calculation_AnAusziehen(data);
    Calculation_Dekubitusprophylaxe(data);
    Calculation_EssenTrinken(data);
    Calculation_Rasieren(data);
    Calculation_KompressionsStruempfe(data);
    Calculation_Korekturen(data);
    Calculation_Summen();
    Calculation_Korrekturfaktoren(data)
    Calculation_Min220Cap(data);
    Calculation_DurchschnittlichePflegeleistungenInMinutenAn30Tage(data);
    Calculation_DurchschnittlichePflegeleistungenInMinutenProTag220CAP()
    Calculation_DurchschnittlichePflegeleistungenInMinutenProTag()
    Calculation_Korekturen(data)
    Calculation_KkUndKanton(data);
    Calculation_BruttoLohn()
    
}
