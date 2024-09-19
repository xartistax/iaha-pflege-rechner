import { SurveyResult } from '../../../survey'; 
import { PflegeRechnerFields } from './PflegeRechnerFields';


interface Lookup {
	[key: string]: string;
  }

export class PflegeRechnerCalculations {

	static iahaCalculation (data: SurveyResult) {
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



// 		anrede
// : 
// "Frau"
// email
// : 
// "demianfueglistaler@icloud.com"
// nachname
// : 
// "Füglistaler"
// phone
// : 
// "0788888888"
// vorname
// : 
// "Demian"
// 		console.log(data)


		const krrankenkassenAbgerechnetJa = ["Assura", "Atupri", "CSS", "Helsana", "KPT", "Sanitas", "Swica"];
		const kantonAbgerechnetJa = ['Aargau', 'Appenzell A.Rh.', 'Basel-Landschaft', 'Basel-Stadt', 'Bern', 'Graubünden', 'Glarus', 'Luzern', 'Nidwalden', 'Obwalden', 'Sankt Gallen', 'Schaffhausen', 'Solothurn', 'Schwyz', 'Uri', 'Wallis', 'Zug', 'Zürich'];

		const mobilitaetLookup : Lookup = {
			"0": "keine Einschränkung der Gehfähigkeit",
			"1": "Gangunsicher oder benutzt Rollator",
			"2": "ist auf einen Rollstuhl angewiesen",
			"3": "ist bettlägerig"
		  };
		  
		  const aufstehenHinlegenLookup : Lookup = {
			"0": "Aufstehen & Hinlegen ist selbständig möglich",
			"1": "ist auf Hilfe beim Aufstehen & Hinlegen angewiesen"
		  };
		  
		  const lageAendernLookup : Lookup = {
			"0": "Die Person kann ihre Lage und Position / Lage selbst verändern",
			"1": "Die Person ist für die Lageänderung auf Hilfe angewiesen"
		  };
		  
		  const kompressionsstrumpfeLookup : Lookup = {
			"0": "Ja",
			"1": "Nein"
		  };
		  
		  const bewegungseinschraenkungLookup : Lookup = {
			"0": "keine Einschränkung der Bewegung des Oberkörpers und/oder der Arme/Hände",
			"1": "es bestehen Einschränkungen bei der Bewegung des Oberkörpers und/oder der Arme/Hände",
			"2": "schwerste Einschränkungen des Oberkörpers und/oder der Arme/Hände (z.B. Tetraplegiker)"
		  };
		  
		  const kognitiveProblemeLookup : Lookup = {
			"0": "keine kognitiven Einschränkungen",
			"1": "leichte Form der Demenz",
			"2": "schwere Form der Demenz"
		  };
		  
		  const inkontinenzLookup : Lookup = {
			"0": "keine Inkontinenz",
			"1": "Urin-Inkontinenz",
			"2": "Stuhl-Inkontinenz",
			"3": "beides"
		  };


		  const geschlechtLookup : Lookup = {
			"0": "Männlich",
			"1": "Weiblich",
		  };


		  	const mobilitaetText = mobilitaetLookup[mobilitaet] || 'Unbekannt';
			const bewegungseinschraenkungText = bewegungseinschraenkungLookup[bewegungseinschraenkung] || 'Unbekannt';
			const kognitiveProblemeText = kognitiveProblemeLookup[kognitiveProbleme] || 'Unbekannt';
			const aufstehenHinlegenText = aufstehenHinlegenLookup[aufstehenHinlegen] || 'Unbekannt';
			const lageAendernText = lageAendernLookup[lageAendern] || 'Unbekannt';
			const inkontinenzText = inkontinenzLookup[inkontinenz] || 'Unbekannt';
			const kompressionsText = kompressionsstrumpfeLookup[kompressionsstrumpfe] || 'Unbekannt';
			const geschlechtText = geschlechtLookup[geschlecht] || 'Unbekannt';
		  
       

		


		/// Directly Mapp KK And Kanton
		PflegeRechnerFields.fields.calculationResults.field_76_kanton = kanton
		PflegeRechnerFields.fields.calculationResults.field_78_krankenkasse = krankenkasse
		PflegeRechnerFields.fields.calculationResults.field_24_mobilitaet = mobilitaetText
		PflegeRechnerFields.fields.calculationResults.field_25_bewegungseinschraenkung = bewegungseinschraenkungText
		PflegeRechnerFields.fields.calculationResults.field_83_kognitive_probleme = kognitiveProblemeText
		PflegeRechnerFields.fields.calculationResults.field_136_aufstehen_und_hinlegen = aufstehenHinlegenText
		PflegeRechnerFields.fields.calculationResults.field_137_lage_aendern = lageAendernText
		PflegeRechnerFields.fields.calculationResults.field_138_inkontinenz = inkontinenzText
		PflegeRechnerFields.fields.calculationResults.field_23_geschlecht = geschlechtText
		PflegeRechnerFields.fields.calculationResults.field_139_kompressionsstrumpfe = kompressionsText


		PflegeRechnerFields.fields.calculationResults.salutation = salutation
		PflegeRechnerFields.fields.calculationResults.vorname = firstName
		PflegeRechnerFields.fields.calculationResults.nachname = lastName
		PflegeRechnerFields.fields.calculationResults.phone = phone
		PflegeRechnerFields.fields.calculationResults.email = email
		


		if (krrankenkassenAbgerechnetJa.includes(krankenkasse)) {
			PflegeRechnerFields.fields.calculationResults.field_999_krankenkasse_kann_abgerechnet_werden = "Ja";
		}


		if (kantonAbgerechnetJa.includes(kanton)) {
			PflegeRechnerFields.fields.calculationResults.field_246_kanton_kann_abgerechnet_werden = "Ja";
		  } 




		


		//// Körperpflege im Bett
		//// IF(fieldname24=='3','Ja','Nein')
		if (
			mobilitaet === '3'

		) {
			PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett = 'Ja';

			// Pflegezeit in Min pro Tag- Ganzwäsche im Bett
			// PflegeRechnerFields.fields.calculationResults.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett = PflegeRechnerFields.fields.calculationFields.field_2_default_GanzwaescheBettlaegerigeKlientIn ;
			
			// Pflegezeit in Min pro Tag - Teilwäsche im Bett
			// PflegeRechnerFields.fields.calculationResults.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett = PflegeRechnerFields.fields.calculationFields.field_4_TeilwaescheImBett

			/// Ganzwäsche im Bad?
			// PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = 'Ja';

			/// Pflegezeit in Min pro Tag - Ganzwäsche im Bad
			// PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = (2 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_1_default_GanzwaescheInBadDuscheOderAmLavabo) / 30;
		}




		/// Ganzwäsche im Bad
		if (PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett === 'Ja') {
			PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = "Ja"
			PflegeRechnerFields.fields.calculationResults.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = (2 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_1_default_GanzwaescheInBadDuscheOderAmLavabo) / 30;
		  } 
		

	

		if (
			mobilitaet === '0' && aufstehenHinlegen === '0' ||
			mobilitaet === '1' ||
			bewegungseinschraenkung === '0' ||
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '0'

		) {
			PflegeRechnerFields.fields.calculationResults.field_152_teilwaesche_im_bad = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad = (5 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_3_default_TeilwaescheAmLavabo) / 30;

		}






















		/// Haare waschen
		if ( mobilitaet === '1' && aufstehenHinlegen === '1' || mobilitaet === '2' || mobilitaet === '3' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
			// IF(fieldname174=='Ja',4.3333*fieldname6/30,0)
			PflegeRechnerFields.fields.calculationResults.field_174_haare_waschen = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_196_pflegezeit_in_min_pro_tag_haare_waschen = 
			4.3333 * PflegeRechnerFields.fields.calculationFields.field_6_default_HaareWaschen / 30;
		}

		/// Zahnpflege
		if ( mobilitaet === '3' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
			PflegeRechnerFields.fields.calculationResults.field_157_zahnpflege = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_197_pflegezeit_in_min_pro_tag_zahnpflege = 
			2 * PflegeRechnerFields.fields.calculationFields.field_9_default_TotalZahnpflege2xTaeglich;
		}

		/// Fingernägel
		if ( (mobilitaet === '1' && aufstehenHinlegen === '1') || (mobilitaet === '2' && lageAendern === '1') || (mobilitaet === '3' && lageAendern === '1') || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
			PflegeRechnerFields.fields.calculationResults.field_210_Fingernaegel_schneiden = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden = 
			(PflegeRechnerFields.fields.calculationFields.field_7_default_FingernaegelSchneiden * 2) / 30;}

		/// Zehnnägel
		if ( mobilitaet === '1' || mobilitaet === '2' || mobilitaet === '3' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
			PflegeRechnerFields.fields.calculationResults.field_161_Zehnaegel_schneiden = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden = 
			(PflegeRechnerFields.fields.calculationFields.field_8_default_FussnaegelSchneiden * 1) / 30;}

		/// Begleitung Toilettengang
		if ( mobilitaet === '1' && aufstehenHinlegen === '1' || mobilitaet === '2' || bewegungseinschraenkung === '1' || bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
			PflegeRechnerFields.fields.calculationResults.field_165_Begleitung_Toilettengang = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang = 
			PflegeRechnerFields.fields.calculationFields.field_192_default_HilfeBeimToilettengang * 2;

		}

		/// Intimpflege
		if ( (inkontinenz === '01' && mobilitaet === '2') || (inkontinenz === '2' && mobilitaet === '2') || (inkontinenz === '3' && mobilitaet === '2') || (inkontinenz === '1' && bewegungseinschraenkung === '1') || (inkontinenz === '2' && bewegungseinschraenkung === '1') || (inkontinenz === '3' && bewegungseinschraenkung === '1') || (inkontinenz === '1' && bewegungseinschraenkung === '1') || (inkontinenz === '1' && bewegungseinschraenkung === '2') || (inkontinenz === '3' && bewegungseinschraenkung === '2')) {
			PflegeRechnerFields.fields.calculationResults.field_173_Intimpflege = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_200_pflegezeit_in_min_pro_tag_Intimpflege = 
			PflegeRechnerFields.fields.calculationFields.field_5_default_IntimpflegeImBettOderAmLavabo ; 

		}

		/// Hilfe beim gehen und stehen
		if ( mobilitaet === '1' && aufstehenHinlegen === '1' ) {

			PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen = PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen = 
			PflegeRechnerFields.fields.calculationFields.field_191_default_HilfeBeimGehenUndStehen * 2;

		}

		/// Lagerung im Bett
		if ( lageAendern === '1' ) {
			PflegeRechnerFields.fields.calculationResults.field_167_LagerungImBett = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_202_pflegezeit_in_min_pro_tag_LagerungImBett = 
			PflegeRechnerFields.fields.calculationFields.field_187_default_LagerungImBett * 3;

		}

		/// Hilfe beim aufstehen und hinlegen
		if ( (mobilitaet === '1' && aufstehenHinlegen === '1') || (mobilitaet === '2' && lageAendern === '1') || (mobilitaet === '3' && lageAendern === '1') ) {
			PflegeRechnerFields.fields.calculationResults.field_168_Hilfe_beim_Aufstehen_und_Hinlegen = 'Ja';

			PflegeRechnerFields.fields.calculationResults.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen = 
			PflegeRechnerFields.fields.calculationFields.field_186_default_AufstehenUndHinlegen * 2;
		}


		
		/// Hilfe beim an- und ausziehen
		if ( mobilitaet === '2' && aufstehenHinlegen === '2' ||  mobilitaet === '3' ||  mobilitaet === '4' && lageAendern === '1' || bewegungseinschraenkung === '2' || bewegungseinschraenkung === '3') {
			
			PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen = 
			PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen * 2;

		}

		/// Dekubitusprophylaxe
		if ( (mobilitaet === '2' && lageAendern === '1') || (mobilitaet === '3' && lageAendern === '1') ) 
		{
			PflegeRechnerFields.fields.calculationResults.field_169_Dekubitusprophylaxe = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe = PflegeRechnerFields.fields.calculationFields.field_188_default_Dekubitusprophylaxe ;

		}

		/// Unterstützung Essen und trinken
		if ( bewegungseinschraenkung === '2' || kognitiveProbleme === '2' ) {
			PflegeRechnerFields.fields.calculationResults.field_170_Unterstutzung_Essen_und_Trinken = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken = PflegeRechnerFields.fields.calculationFields.field_190_default_BeiEssenTrinkenUnterstuetzen * 2;

		}

		/// Rasieren
		if ( (geschlecht === '0' && kognitiveProbleme === '2') || (geschlecht === '0' && bewegungseinschraenkung === '1') || (geschlecht === '0' && bewegungseinschraenkung === '2') ) {
			PflegeRechnerFields.fields.calculationResults.field_171_Rasieren = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_207_pflegezeit_in_min_pro_tag_Rasieren = 
			(4 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_10_default_RasurInKombinationMitGanzOderTeilwaesche) / 30;

		}

		/// Kompressiumsstrümüfe
		if ( kompressionsstrumpfe === '1' ) {
			PflegeRechnerFields.fields.calculationResults.field_172_Kompressionsstrumpfe = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe = 
			2 * PflegeRechnerFields.fields.calculationFields.field_189_default_KompressionsstruempfeOderVerband;

		}

		/// SUMMER Leistungen im Schnitt Brutto
		PflegeRechnerFields.fields.calculationResults.field_81_Summe_Pflegeleistung_im_durchscnitt_brutto =
			PflegeRechnerFields.fields.calculationResults.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett +
			PflegeRechnerFields.fields.calculationResults.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett +
			PflegeRechnerFields.fields.calculationResults.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad +
			PflegeRechnerFields.fields.calculationResults.field_196_pflegezeit_in_min_pro_tag_haare_waschen +
			PflegeRechnerFields.fields.calculationResults.field_197_pflegezeit_in_min_pro_tag_zahnpflege +
			PflegeRechnerFields.fields.calculationResults.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden +
			PflegeRechnerFields.fields.calculationResults.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden +
			PflegeRechnerFields.fields.calculationResults.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang +
			PflegeRechnerFields.fields.calculationResults.field_200_pflegezeit_in_min_pro_tag_Intimpflege +
			PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen +
			PflegeRechnerFields.fields.calculationResults.field_202_pflegezeit_in_min_pro_tag_LagerungImBett +
			PflegeRechnerFields.fields.calculationResults.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen +
			PflegeRechnerFields.fields.calculationResults.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen +
			PflegeRechnerFields.fields.calculationResults.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe +
			PflegeRechnerFields.fields.calculationResults.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken +
			PflegeRechnerFields.fields.calculationResults.field_207_pflegezeit_in_min_pro_tag_Rasieren +
			PflegeRechnerFields.fields.calculationResults.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe;


		
		//Korrekturen

		if (PflegeRechnerFields.fields.calculationResults.field_165_Begleitung_Toilettengang === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen === 'Ja') {
			PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen =
				PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen - PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen === 'Ja') {
			PflegeRechnerFields.fields.calculationResults.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen = (2 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen) / 30;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_152_teilwaesche_im_bad === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen === 'Ja') {
			PflegeRechnerFields.fields.calculationResults.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen = (5 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen) / 30;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad === 'Ja' && PflegeRechnerFields.fields.calculationResults.field_172_Kompressionsstrumpfe === 'Ja') {
			PflegeRechnerFields.fields.calculationResults.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe = (2 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_189_default_KompressionsstruempfeOderVerband) / 30;
		}

		PflegeRechnerFields.fields.calculationResults.field_216_Summe_Korrekturzeiten =
			PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen +
			PflegeRechnerFields.fields.calculationResults.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen +
			PflegeRechnerFields.fields.calculationResults.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen +
			PflegeRechnerFields.fields.calculationResults.field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe;

		PflegeRechnerFields.fields.calculationResults.field_217_Summe_Pflegeleistung_im_durchscnitt_netto = PflegeRechnerFields.fields.calculationResults.field_81_Summe_Pflegeleistung_im_durchscnitt_brutto - PflegeRechnerFields.fields.calculationResults.field_216_Summe_Korrekturzeiten;

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

		if (kognitiveProbleme === '2' && bewegungseinschraenkung === '0') {
			PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme = 0.7;
		} else if (kognitiveProbleme === '2' && bewegungseinschraenkung === '1') {
			PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme = 1.1;
		} else if (kognitiveProbleme === '2' && bewegungseinschraenkung === '2') {
			PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme = 1.1;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit + PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme == 2) {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1;
		} else if (PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit + PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme == 1.7) {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 0.7;
		} else if (PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit + PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme == 1.4) {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 0.7;
		} else if (PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit + PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme == 1.8) {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1.1;
		} else if (PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit + PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme == 2.2) {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1.1;
		} else if (PflegeRechnerFields.fields.calculationResults.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit + PflegeRechnerFields.fields.calculationResults.field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme == 2.1) {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1.1;
		} else {
			PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz = 1;
		}

		PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten =
			Math.round(PflegeRechnerFields.fields.calculationResults.field_217_Summe_Pflegeleistung_im_durchscnitt_netto * PflegeRechnerFields.fields.calculationResults.field_178_Ergebnis_KorrekturFaktor_Demenz * 10) / 10;

		if (PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten > 220) {
			PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag = 220;
		} else {
			PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag = Math.round(PflegeRechnerFields.fields.calculationResults.field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten);
		}

		if (PflegeRechnerFields.fields.calculationResults.field_246_kanton_kann_abgerechnet_werden === "Ja") {
			PflegeRechnerFields.fields.calculationResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag = parseFloat((PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag / 60).toFixed(2));
		}

		if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 30) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 0;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 30 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 60) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 30;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 60 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 90) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 60;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 90 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 120) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 90;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 120 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 150) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 120;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 150 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 180) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 150;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 180) {
			PflegeRechnerFields.fields.calculationResults.field_259_Definition_unterer_Bereich_Pflegezeiten = 180;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 30) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 30;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 30 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 60) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 60;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 60 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 90) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 90;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 90 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 120) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 120;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 120 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 150) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 150;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 150 && PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag <= 180) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 180;
		} else if (PflegeRechnerFields.fields.calculationResults.field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag > 180) {
			PflegeRechnerFields.fields.calculationResults.field_260_Definition_oberer_Bereich_Pflegezeiten = 220;
		}

        PflegeRechnerFields.fields.calculationResults.field_261_Bruttolohn = Math.round((PflegeRechnerFields.fields.calculationResults.field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag * 35) * 26);

	}
}