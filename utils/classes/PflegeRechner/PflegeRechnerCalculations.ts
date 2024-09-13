import { SurveyResult } from '../../../survey'; 
import { PflegeRechnerFields } from './PflegeRechnerFields';

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


		/// Directly Mapp KK And Kanton
		PflegeRechnerFields.fields.calculationResults.field_76_kanton = kanton
		PflegeRechnerFields.fields.calculationResults.field_78_krankenkasse = krankenkasse
		PflegeRechnerFields.fields.calculationResults.field_24_mobilitaet = mobilitaet
		PflegeRechnerFields.fields.calculationResults.field_25_bewegungseinschraenkung = bewegungseinschraenkung
		PflegeRechnerFields.fields.calculationResults.field_83_kognitive_probleme = kognitiveProbleme
		PflegeRechnerFields.fields.calculationResults.field_136_aufstehen_und_hinlegen = aufstehenHinlegen
		PflegeRechnerFields.fields.calculationResults.field_137_lage_aendern = lageAendern
		PflegeRechnerFields.fields.calculationResults.field_138_inkontinenz = inkontinenz
		PflegeRechnerFields.fields.calculationResults.field_23_geschlecht = geschlecht
		PflegeRechnerFields.fields.calculationResults.field_139_kompressionsstrumpfe = kompressionsstrumpfe




		if (
			kanton == 'Aargau' ||
			kanton == 'Appenzell A.Rh.' ||
			kanton == 'Basel-Landschaft' ||
			kanton == 'Basel-Stadt' ||
			kanton == 'Bern' ||
			kanton == 'Graubünden' ||
			kanton == 'Glarus' ||
			kanton == 'Luzern' ||
			kanton == 'Nidwalden' ||
			kanton == 'Obwalden' ||
			kanton == 'Sankt Gallen' ||
			kanton == 'Schaffhausen' ||
			kanton == 'Solothurn' ||
			kanton == 'Schwyz' ||
			kanton == 'Uri' ||
			kanton == 'Wallis' ||
			kanton == 'Zug' ||
			kanton == 'Zürich'
		) {
			PflegeRechnerFields.fields.calculationResults.field_246_kann_abgerechnet_werden = 1;
		} else if (kanton == 'Appenzell I.Rh.' || kanton == 'Freiburg' || kanton == 'Genf' || kanton == 'Jura' || kanton == 'Neuenburg' || kanton == 'Thurgau' || kanton == 'Tessin' || kanton == 'Waadt') {
			PflegeRechnerFields.fields.calculationResults.field_246_kann_abgerechnet_werden = 0;
		}

		if (
			mobilitaet === '3'

		) {
			PflegeRechnerFields.fields.calculationResults.field_153_koerperpflege_im_bett = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett = PflegeRechnerFields.fields.calculationFields.field_2_default_GanzwaescheBettlaegerigeKlientIn ;
			PflegeRechnerFields.fields.calculationResults.field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett = PflegeRechnerFields.fields.calculationFields.field_4_TeilwaescheImBett

			PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad = 'Ja';
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

		if (
			mobilitaet === '0' && aufstehenHinlegen === '0' ||
			mobilitaet === '1' ||
			mobilitaet === '2' ||
			bewegungseinschraenkung === '0' ||
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '1'

		) {
			PflegeRechnerFields.fields.calculationResults.field_174_haare_waschen = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_196_pflegezeit_in_min_pro_tag_haare_waschen = 4.3333 * PflegeRechnerFields.fields.calculationFields.field_6_default_HaareWaschen / 30;

		}

		if (
			mobilitaet === '2' ||
			bewegungseinschraenkung === '0' ||
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '1'

		) {
			PflegeRechnerFields.fields.calculationResults.field_157_zahnpflege = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_197_pflegezeit_in_min_pro_tag_zahnpflege = 2 * PflegeRechnerFields.fields.calculationFields.field_9_default_TotalZahnpflege2xTaeglich;

		}

		if (
			(mobilitaet === '0' && aufstehenHinlegen === '0') ||
			(mobilitaet === '1' && lageAendern === '0') ||
			(mobilitaet === '2' && lageAendern === '0') ||
			bewegungseinschraenkung === '0' ||
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '1'

		) {
			PflegeRechnerFields.fields.calculationResults.field_210_Fingernaegel_schneiden = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden = (PflegeRechnerFields.fields.calculationFields.field_7_default_FingernaegelSchneiden * 2) / 30;

		}

		if (
			mobilitaet === '0' ||
			mobilitaet === '1' ||
			mobilitaet === '2' ||
			bewegungseinschraenkung === '0' ||
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '1'

		) {
			PflegeRechnerFields.fields.calculationResults.field_161_Zehnaegel_schneiden = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden = (PflegeRechnerFields.fields.calculationFields.field_8_default_FussnaegelSchneiden * 1) / 30;

		}

		if (
			mobilitaet === '0' && aufstehenHinlegen === '0' ||
			mobilitaet === '1' ||
			bewegungseinschraenkung === '0' ||
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '1'

		) {
			PflegeRechnerFields.fields.calculationResults.field_165_Begleitung_Toilettengang = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang = PflegeRechnerFields.fields.calculationFields.field_192_default_HilfeBeimToilettengang * 2;

		}

		if (
			(inkontinenz === '0' && mobilitaet === '1') ||
			(inkontinenz === '1' && mobilitaet === '1') ||
			(inkontinenz === '2' && mobilitaet === '1') ||
			(inkontinenz === '0' && bewegungseinschraenkung === '0') ||
			(inkontinenz === '1' && bewegungseinschraenkung === '0') ||
			(inkontinenz === '2' && bewegungseinschraenkung === '0') ||
			(inkontinenz === '0' && bewegungseinschraenkung === '1') ||
			(inkontinenz === '1' && bewegungseinschraenkung === '1') ||
			(inkontinenz === '2' && bewegungseinschraenkung === '1')

		) {
			PflegeRechnerFields.fields.calculationResults.field_173_Intimpflege = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_200_pflegezeit_in_min_pro_tag_Intimpflege = PflegeRechnerFields.fields.calculationFields.field_5_default_IntimpflegeImBettOderAmLavabo ; 

		}

		if ( mobilitaet === '0' && aufstehenHinlegen === '0' ) {

			PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen = PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen = PflegeRechnerFields.fields.calculationFields.field_191_default_HilfeBeimGehenUndStehen * 2;

		}

		if (
			lageAendern === '0'

		) {
			PflegeRechnerFields.fields.calculationResults.field_167_LagerungImBett = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_202_pflegezeit_in_min_pro_tag_LagerungImBett = PflegeRechnerFields.fields.calculationFields.field_187_default_LagerungImBett * 3;

		}

		if (
			(mobilitaet === '0' && aufstehenHinlegen === '0') ||
			(mobilitaet === '1' && lageAendern === '0') ||
			(mobilitaet === '2' && lageAendern === '0')

		) {
			PflegeRechnerFields.fields.calculationResults.field_168_Hilfe_beim_Aufstehen_und_Hinlegen = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen = PflegeRechnerFields.fields.calculationFields.field_186_default_AufstehenUndHinlegen * 2;

		}


		
		
		if (
			mobilitaet === '1' && aufstehenHinlegen === '1' || 
			mobilitaet === '2' || 
			mobilitaet === '3' && lageAendern === '0' || 
			bewegungseinschraenkung === '1' || 
			bewegungseinschraenkung === '2'
		) {
			
		
			
			PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen = PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen * 2;

		}

		if (
			(mobilitaet === '1' && lageAendern === '0') ||
			(mobilitaet === '2' && lageAendern === '0')

		) 
		
	
		
		{
			PflegeRechnerFields.fields.calculationResults.field_169_Dekubitusprophylaxe = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe = PflegeRechnerFields.fields.calculationFields.field_188_default_Dekubitusprophylaxe ;

		}

		if (
			bewegungseinschraenkung === '1' ||
			kognitiveProbleme === '1'

		) {
			PflegeRechnerFields.fields.calculationResults.field_170_Unterstutzung_Essen_und_Trinken = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken = PflegeRechnerFields.fields.calculationFields.field_190_default_BeiEssenTrinkenUnterstuetzen * 2;

		}

		if (
			(geschlecht === '0' && kognitiveProbleme === '1') ||
			(geschlecht === '0' && bewegungseinschraenkung === '0') ||
			(geschlecht === '0' && bewegungseinschraenkung === '1')

		) {
			PflegeRechnerFields.fields.calculationResults.field_171_Rasieren = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_207_pflegezeit_in_min_pro_tag_Rasieren = (4 * 4.333 * PflegeRechnerFields.fields.calculationFields.field_10_default_RasurInKombinationMitGanzOderTeilwaesche) / 30;

		}

		if (
			kompressionsstrumpfe === '0'

		) {
			PflegeRechnerFields.fields.calculationResults.field_172_Kompressionsstrumpfe = 'Ja';
			PflegeRechnerFields.fields.calculationResults.field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe = 2 * PflegeRechnerFields.fields.calculationFields.field_189_default_KompressionsstruempfeOderVerband;

		}

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

		if (PflegeRechnerFields.fields.calculationResults.field_165_Begleitung_Toilettengang === 'ja' && PflegeRechnerFields.fields.calculationResults.field_166_HilfeBeimGehenUndStehen === 'ja') {
			PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen =
				PflegeRechnerFields.fields.calculationResults.field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen - PflegeRechnerFields.fields.calculationResults.field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad === 'ja' && PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen === 'ja') {
			PflegeRechnerFields.fields.calculationResults.field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen = (2 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen) / 30;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_152_teilwaesche_im_bad === 'ja' && PflegeRechnerFields.fields.calculationResults.field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen === 'ja') {
			PflegeRechnerFields.fields.calculationResults.field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen = (5 * 4.3333 * PflegeRechnerFields.fields.calculationFields.field_185_default_AnUndAusziehen) / 30;
		}

		if (PflegeRechnerFields.fields.calculationResults.field_143_Ganzwaesche_im_bad === 'ja' && PflegeRechnerFields.fields.calculationResults.field_172_Kompressionsstrumpfe === 'ja') {
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

		if (PflegeRechnerFields.fields.calculationResults.field_246_kann_abgerechnet_werden === 1) {
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