export interface CalculationResultsType {

	field_138_inkontinenz : string,
	field_83_kognitive_probleme : string,
	field_25_bewegungseinschraenkung : string,
	field_139_kompressionsstrumpfe : string,
	field_137_lage_aendern : string,
	field_136_aufstehen_und_hinlegen : string,
	field_23_geschlecht: string,
	field_24_mobilitaet: string,
	field_78_krankenkasse: string,
	field_76_kanton: string,


    field_246_kann_abgerechnet_werden: number;
    field_153_koerperpflege_im_bett: string;
    field_184_pflegezeit_in_min_pro_tag_Ganzwasche_im_Bett: number; 
    field_194_pflegezeit_in_min_pro_tag_Teilwasche_im_bett: number;
    field_143_Ganzwaesche_im_bad: string;
    field_193_pflegezeit_in_min_pro_tag_Ganzwaesche_im_bad: number;
    field_152_teilwaesche_im_bad: string;
    field_195_pflegezeit_in_min_pro_tag_Teilwaesche_im_bad: number;
    field_174_haare_waschen: string;
    field_196_pflegezeit_in_min_pro_tag_haare_waschen: number;
    field_157_zahnpflege: string;
    field_197_pflegezeit_in_min_pro_tag_zahnpflege: number;
    field_210_Fingernaegel_schneiden: string;
    field_209_pflegezeit_in_min_pro_tag_Fingernaegel_schneiden: number;
    field_161_Zehnaegel_schneiden: string;
    field_198_pflegezeit_in_min_pro_tag_Zehnaegel_schneiden: number;
    field_165_Begleitung_Toilettengang: string;
    field_199_pflegezeit_in_min_pro_tag_Begleitung_Toilettengang: number;
    field_173_Intimpflege: string;
    field_200_pflegezeit_in_min_pro_tag_Intimpflege: number;
    field_166_HilfeBeimGehenUndStehen: string;
    field_201_pflegezeit_in_min_pro_tag_HilfeBeimGehenUndStehen: number;
    field_167_LagerungImBett: string;
    field_202_pflegezeit_in_min_pro_tag_LagerungImBett: number;
    field_168_Hilfe_beim_Aufstehen_und_Hinlegen: string;
    field_203_pflegezeit_in_min_pro_tag_Hilfe_beim_Aufstehen_und_Hinlegen: number;
    field_175_Hilfe_beim_Hilfe_beim_An_und_Ausziehen: string;
    field_204_pflegezeit_in_min_pro_tag_Hilfe_beim_Hilfe_beim_An_und_Ausziehen: number;
    field_169_Dekubitusprophylaxe: string;
    field_205_pflegezeit_in_min_pro_tag_Dekubitusprophylaxe: number;
    field_170_Unterstutzung_Essen_und_Trinken: string;
    field_206_pflegezeit_in_min_pro_tag_Unterstutzung_Essen_und_Trinken: number;
    field_171_Rasieren: string;
    field_207_pflegezeit_in_min_pro_tag_Rasieren: number;
    field_172_Kompressionsstrumpfe: string;
    field_208_pflegezeit_in_min_pro_tag_Kompressionsstrumpfe: number;
    field_81_Summe_Pflegeleistung_im_durchscnitt_brutto: number;
    field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen: number;
    field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen: number;
    field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen: number;
    field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe: number;
    field_216_Summe_Korrekturzeiten: number;
    field_217_Summe_Pflegeleistung_im_durchscnitt_netto: number;
    field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit: number;
    field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme: number;
    field_178_Ergebnis_KorrekturFaktor_Demenz: number;
    field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten: number;
    field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag: number;
    field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag: number;
    field_259_Definition_unterer_Bereich_Pflegezeiten: number;
    field_260_Definition_oberer_Bereich_Pflegezeiten: number;
    field_261_Bruttolohn: number;
}
// Type that matches the structure of the survey result
export interface SurveyResult {
    Geschlecht: string;
    Mobilität: string;
    AufstehenHinlegen?: string;
    LageÄndern?: string;
    Kompressionsstrümpfe?: string;
    Bewegungseinschränkung?: string;
    KognitiveProbleme: string;
    Inkontinenz?: string;
    Kanton: string;
    Krankenkasse: string;
}



export interface SurveyJSONType {
	locale: string;
	logoPosition: string;
	pages: Page[];
    showCompletedPage: boolean
	showQuestionNumbers: string
	pageNextText : LanguageText,
	completeText : LanguageText
}

export interface LanguageText {
	[languageCode: string]: string;
  }

export interface Page {
	name: string;
	elements: Element[];
}

export type Element = DropdownElement; // Extend this with other possible element types if needed

export interface DropdownElement {
	type: 'dropdown';
	name: string;
	title: string;
	isRequired: boolean;
	choices: Array<string | ChoiceObject>;
	placeholder: string;
	visibleIf?: string;
}

export interface ChoiceObject {
	value: string;
	text: string;
}

export const surveyJson: SurveyJSONType = {
	"locale": "de",
	"logoPosition": "right",
	"pages": [
	  {
		"name": "page1",
		"elements": [
		  {
			"type": "dropdown",
			"name": "Geschlecht",
			"title": "Bitte geben Sie das Geschlecht der pflegebedürftigen Person an",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "Männlich"
			  },
			  {
				"value": "1",
				"text": "Weiblich"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Mobilität",
			"title": "Wie mobil ist die pflegebedürftige Person in Ihrem Zuhause?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "keine Einschränkung der Gehfähigkeit"
			  },
			  {
				"value": "1",
				"text": "Gangunsicher oder benutzt Rollator"
			  },
			  {
				"value": "2",
				"text": "ist auf einen Rollstuhl angewiesen"
			  },
			  {
				"value": "3",
				"text": "ist bettlägerig"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "AufstehenHinlegen",
			"title": "Kann die pflegebedürftige Person selbständig vom Bett aufstehen oder sich hinlegen?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "Aufstehen & Hinlegen ist selbständig möglich"
			  },
			  {
				"value": "1",
				"text": "ist auf Hilfe beim Aufstehen & Hinlegen angewiesen"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "LageÄndern",
			"title": "Kann die pflegebedürftige Person ihre Lage (im Bett oder im Rollstuhl) selbst ändern?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "Die Person kann ihre Lage und Position / Lage selbst verändern"
			  },
			  {
				"value": "1",
				"text": "Die Person ist für die Lageänderung auf Hilfe angewiesen"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Kompressionsstrümpfe",
			"title": "Benutzt die pflegebedürftige Person Kompressionsstrümpfe?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "Ja"
			  },
			  {
				"value": "1",
				"text": "Nein"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Bewegungseinschränkung",
			"title": "Gibt es Einschränkungen der Bewegungsfähigkeit des Oberkörpers und/oder der Arme/Hände?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "keine Einschränkung der Bewegung des Oberkörpers und/oder der Arme/Hände"
			  },
			  {
				"value": "1",
				"text": "es bestehen Einschränkungen bei der Bewegung des Oberkörpers und/oder der Arme/Hände"
			  },
			  {
				"value": "2",
				"text": "schwerste Einschränkungen des Oberkörpers und/oder der Arme/Hände (z.B. Tetraplegiker)"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "KognitiveProbleme",
			"title": "Leidet die pflegebedürftige Person unter kognitiven Problemen (Gedächtnisproblemen)?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "keine kognitiven Einschränkungen"
			  },
			  {
				"value": "1",
				"text": "leichte Form der Demenz"
			  },
			  {
				"value": "2",
				"text": "schwere Form der Demenz"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Inkontinenz",
			"title": "Leidet die pflegebedürftige Person unter Inkontinenz?",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "keine Inkontinenz"
			  },
			  {
				"value": "1",
				"text": "Urin-Inkontinenz"
			  },
			  {
				"value": "2",
				"text": "Stuhl-Inkontinenz"
			  },
			  {
				"value": "3",
				"text": "beides"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Kanton",
			"title": "In welchem Kanton lebt die pflegebedürftige Person?",
			"isRequired": true,
			"choices": [
			  "Aargau",
			  "Appenzell A.Rh.",
			  "Appenzell I.Rh.",
			  "Basel-Landschaft",
			  "Basel-Stadt",
			  "Bern",
			  "Freiburg",
			  "Genf",
			  "Glarus",
			  "Graubünden",
			  "Jura",
			  "Luzern",
			  "Neuenburg",
			  "Nidwalden",
			  "Obwalden",
			  "Sankt Gallen",
			  "Schaffhausen",
			  "Schwyz",
			  "Solothurn",
			  "Tessin",
			  "Thurgau",
			  "Uri",
			  "Waadt",
			  "Wallis",
			  "Zug",
			  "Zürich"
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Krankenkasse",
			"title": "Bei welcher Krankenkasse ist die pflegebedürftige Person grundversichert?",
			"isRequired": true,
			"choices": [
			  "Assura",
			  "Atupri",
			  "Concordia",
			  "CSS",
			  "Groupe Mutuel",
			  "Helsana",
			  "KPT",
			  "Sanitas",
			  "Swica",
			  "Visana",
			  "SONSTIGE"
			],
			"placeholder": "bitte auswählen"
		  }
		]
	  }
	],
	"showCompletedPage": false,
	"showQuestionNumbers": "off",
	"pageNextText": {
	  "de": "Weiter "
	},
	"completeText": {
	  "de": "Berechnen"
	}
  }