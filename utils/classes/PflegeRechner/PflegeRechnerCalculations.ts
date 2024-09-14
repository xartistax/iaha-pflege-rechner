import { SurveyResult } from '../../../survey'; 
import { PflegeRechnerFields } from './PflegeRechnerFields';



const cantonTypes = {
	ABRECHNEN_CANTONS: ['Aargau', 'Appenzell A.Rh.', 'Basel-Landschaft', 'Basel-Stadt', 'Bern', 'Graubünden', 'Glarus', 'Luzern', 'Nidwalden', 'Obwalden', 'SanktGallen', 'Schaffhausen', 'Solothurn', 'Schwyz', 'Uri', 'Wallis', 'Zug', 'Zürich'],
	NO_ABRECHNEN_CANTONS: ['Appenzell I.Rh.', 'Freiburg', 'Genf', 'Jura', 'Neuenburg', 'Thurgau', 'Tessin', 'Waadt']
};

const calculateFieldValue = (value1: number, value2: number, defaultValue: number, divisor = 30) => {
	return (value1 * value2) / divisor;
};




export class PflegeRechnerCalculations {

	static iahaCalculation (data: SurveyResult) {

		const fields = PflegeRechnerFields.fields.calculationResults;
    	const defaultValues = PflegeRechnerFields.fields.calculationFields;

		// Extracting data fields
		const {
			Mobilität: mobilitaet,
			Bewegungseinschränkung: bewegungseinschraenkung,
			KognitiveProbleme: kognitiveProbleme,
			AufstehenHinlegen: aufstehenHinlegen,
			LageÄndern: lageAendern,
			Inkontinenz: inkontinenz,
			Geschlecht: geschlecht,
			Kompressionsstrümpfe: kompressionsstrumpfe,
			Kanton: kanton,
			Krankenkasse: krankenkasse,
		  } = data;
		
		
		// Assign Kanton and Krankenkasse values
		fields.field_76_kanton = kanton;
		fields.field_78_krankenkasse = krankenkasse;
		// Assign mobility-related values
		fields.field_24_mobilitaet = mobilitaet;
		fields.field_25_bewegungseinschraenkung = bewegungseinschraenkung;
		fields.field_83_kognitive_probleme = kognitiveProbleme;
		fields.field_136_aufstehen_und_hinlegen = aufstehenHinlegen;
		fields.field_137_lage_aendern = lageAendern;
		fields.field_138_inkontinenz = inkontinenz;
		fields.field_23_geschlecht = geschlecht;
		fields.field_139_kompressionsstrumpfe = kompressionsstrumpfe;

		// Determine if canton can be billed
		fields.field_246_kann_abgerechnet_werden = cantonTypes.ABRECHNEN_CANTONS.includes(kanton) ? 1 : 0;

		// Simplify and structure calculations using helper functions
		this.assignPersonalCareTimes(mobilitaet, bewegungseinschraenkung, kognitiveProbleme, aufstehenHinlegen, lageAendern, inkontinenz);
		//this.calculateCorrectionTimes(fields, mobilitaet, kognitiveProbleme);


		}




		

		static assignPersonalCareTimes(mobilitaet: string, bewegungseinschraenkung: string, kognitiveProbleme: string, aufstehenHinlegen: string, lageAendern: string, inkontinenz: string) {
			const fields = PflegeRechnerFields.fields.calculationResults;
			const defaultValues = PflegeRechnerFields.fields.calculationFields;
		
			// Ganzwasche Calculation
			if (mobilitaet === '3') {
				fields.field_153_koerperpflege_im_bett = 'Ja';
				fields.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett = defaultValues.field_2_default_GanzwaescheBettlaegerigeKlientIn;
				fields.field_143_Ganzwaesche_im_bad = 'Ja';
				fields.field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad = calculateFieldValue(2, 4.333, defaultValues.field_1_default_GanzwaescheInBadDuscheOderAmLavabo);
			}
		
			// Teilwasche Calculation
			if (mobilitaet === '0' && aufstehenHinlegen === '0' || mobilitaet === '1' || bewegungseinschraenkung === '0' || bewegungseinschraenkung === '1' || kognitiveProbleme === '0') {
				fields.field_152_teilwaesche_im_bad = 'Ja';
				fields.field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad = calculateFieldValue(5, 4.3333, defaultValues.field_3_default_TeilwaescheAmLavabo);
			}
		
			// Haare waschen Calculation
			if (mobilitaet === '3') {
				fields.field_174_haare_waschen = 'Ja';
				fields.field_196_pflegezeit_in_min_pro_tag_haare_waschen = calculateFieldValue(2, 4.3333, defaultValues.field_6_default_HaareWaschen);
			}
		
			// Zahnpflege Calculation
			if (mobilitaet === '0' && kognitiveProbleme === '0' || mobilitaet === '1' || bewegungseinschraenkung === '0' || bewegungseinschraenkung === '1') {
				fields.field_157_zahnpflege = 'Ja';
				fields.field_197_pflegezeit_in_min_pro_tag_zahnpflege = calculateFieldValue(5, 4.3333, defaultValues.field_9_default_TotalZahnpflege2xTaeglich);
			}
		
			// Rasieren Calculation
			if (mobilitaet === '3') {
				fields.field_171_Rasieren = 'Ja';
				fields.field_207_pflegezeit_in_min_pro_tag_Rasieren = calculateFieldValue(2, 4.3333, defaultValues.field_10_default_RasurInKombinationMitGanzOderTeilwaesche);
			}
		
			// Kompressionsstrümpfe Calculation
			if (mobilitaet === '3') {
				fields.field_139_kompressionsstrumpfe = 'Ja';
				fields.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe = calculateFieldValue(1, 4.3333, defaultValues.field_189_default_KompressionsstruempfeOderVerband);
			}
		
			// Hilfe beim Gehen und Stehen Calculation
			if (mobilitaet === '0' || mobilitaet === '1' || bewegungseinschraenkung === '0') {
				fields.field_166_HilfeBeimGehenUndStehen = 'Ja';
				fields.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen = calculateFieldValue(5, 4.3333, defaultValues.field_191_default_HilfeBeimGehenUndStehen);
			}
		
			// Lagerung im Bett Calculation
			if (lageAendern === '0') {
				fields.field_167_LagerungImBett= 'Ja';
				fields.field_202_pflegezeit_in_min_pro_tag_LagerungImBett = calculateFieldValue(3, 4.3333, defaultValues.field_187_default_LagerungImBett);
			}
		
			// Hilfe beim Aufstehen und Hinlegen Calculation
			if (aufstehenHinlegen === '0') {
				fields.field_136_aufstehen_und_hinlegen = 'Ja';
				fields.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen = calculateFieldValue(2, 4.3333, defaultValues.field_186_default_AufstehenUndHinlegen);
			}
		
			// Intimpflege Calculation
			if (inkontinenz === '0' || inkontinenz === '1') {
				fields.field_173_Intimpflege = 'Ja';
				fields.field_200_pflegezeit_in_min_pro_tag_Intimpflege = calculateFieldValue(4, 4.3333, defaultValues.field_5_default_IntimpflegeImBettOderAmLavabo);
			}
		
			// Begleitung Toilettengang Calculation
			if (inkontinenz === '0' || inkontinenz === '1') {
				fields.field_165_Begleitung_Toilettengang = 'Ja';
				fields.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang = calculateFieldValue(4, 4.3333, defaultValues.field_192_default_HilfeBeimToilettengang);
			}
		
			// Unterstützung Essen und Trinken Calculation
			if (mobilitaet === '0' || kognitiveProbleme === '0') {
				fields.field_170_Unterstutzung_Essen_und_Trinken = 'Ja';
				fields.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken = calculateFieldValue(4, 4.3333, defaultValues.field_190_default_BeiEssenTrinkenUnterstuetzen);
			}
		}
		static calculateCorrectionTimes(fields: { field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit: number; field_216_Summe_Korrekturzeiten: any; field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen: any; field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen: any; }, mobilitaet: string, kognitiveProbleme: string) {
			if (kognitiveProbleme === '2' && mobilitaet === '0') {
			  fields.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 0.7;
			} else if (kognitiveProbleme === '2' && mobilitaet === '2') {
			  fields.field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit = 1.1;
			}
		
			// Sum corrections
			fields.field_216_Summe_Korrekturzeiten = fields.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen
			  + fields.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen;
		  }
		
}