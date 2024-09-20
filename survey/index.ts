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


	field_999_krankenkasse_kann_abgerechnet_werden: string;
    field_246_kanton_kann_abgerechnet_werden: string;
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
    field_81_Summe_Pflegeleistung_in_Minuten_an_30_Tagen_vor_abzug_demenz: number;
    field_179_Korrektur_bei_Toilettengang_und_Hilfe_beim_Gehen: number;
    field_180_Korrektur_bei_Ganzwasche_und_An_Ausziehen: number;
    field_182_Korrektur_bei_Teilwasche_und_An_Ausziehen: number;
    field_181_Korrektur_bei_Ganzwasche_und_Kompressionsstrumpfe: number;
    field_216_Summe_Korrekturzeiten: number;

	field_217_Summe_durchschnittliche_pflegeleistungen_in_Minuten_an_30_Tagen : number;




    field_176_KorrekturFaktor_bei_schwerer_Demenz_Gehfahigkeit: number;
    field_177_KorrekturFaktor_bei_schwerer_Demenz_Rumpf_Arme: number;
    field_178_Ergebnis_KorrekturFaktor_Demenz: number;
    field_211_Summe_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag_vor_CAP_bei_220_Minuten: number;
    field_218_durchschnittliche_Pflegeleistungen_in_Minuten_pro_Tag: number;
    field_212_Summe_durchschnittliche_Pflegeleistungen_in_Stunden_pro_Tag: number;
    field_259_Definition_unterer_Bereich_Pflegezeiten: number;
    field_260_Definition_oberer_Bereich_Pflegezeiten: number;
    field_261_Bruttolohn: number;
	salutation : string; 
	vorname: string;
	nachname : string;
	phone : string;
	email : string;
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
	anrede: string;
	vorname: string;
	nachname: string;
	phone: string;
	email: string

}


export type Element = DropdownElement | TextElement | CheckboxElement | RadioGroupElement; // Extend this with other possible element types if needed

export interface TextElement {
  type: 'text';
  name: string;
  title: LanguageText;
  isRequired: boolean;
  inputType?: 'text' | 'tel' | 'email'; // Add other input types if needed
}

export interface CheckboxElement {
  type: 'checkbox';
  name: string;
  title: LanguageText;
  isRequired: boolean;
  choices: Array<ChoiceObject>;
}



export interface RadioGroupElement {
	type: 'radiogroup';
	name: string;
	title: LanguageText;
	isRequired: boolean;
	choices: Array<ChoiceObjectAlt>;
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
	title?: { de: string };
	elements: Element[];
}



export interface DropdownElement {
	type: 'dropdown';
	name: string;
	title?: string | LanguageText;
	isRequired: boolean;
	choices: Array<string | ChoiceObject>;
	placeholder: string;
	visible?: boolean;
	visibleIf?: string;
	clearIfInvisible?: string
}

export interface ChoiceObject {
	value: string;
	text: string;
}

export interface ChoiceObjectAlt {
	value: string;
	text: LanguageText;
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
			"title": {
			  "default": "Bitte geben Sie das Geschlecht der pflegebedürftigen Person an",
			  "de": "23_Bitte geben Sie das Geschlecht der pflegebedürftigen Person an"
			},
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
			"visibleIf": "{Geschlecht} notempty",
			"title": {
			  "default": "Wie mobil ist die pflegebedürftige Person in Ihrem Zuhause?",
			  "de": "24_Wie mobil ist die pflegebedürftige Person in Ihrem Zuhause?"
			},
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{Mobilität} = 1",
			"title": {
			  "default": "Kann die pflegebedürftige Person selbständig vom Bett aufstehen oder sich hinlegen?",
			  "de": "136_Kann die pflegebedürftige Person selbständig vom Bett aufstehen oder sich hinlegen?"
			},
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{Mobilität} = 2 or {Mobilität} = 3",
			"title": {
			  "default": "Kann die pflegebedürftige Person ihre Lage (im Bett oder im Rollstuhl) selbst ändern?",
			  "de": "137_Kann die pflegebedürftige Person ihre Lage (im Bett oder im Rollstuhl) selbst ändern?"
			},
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{Mobilität} = 0 or {AufstehenHinlegen} notempty or {LageÄndern} notempty",
			"title": {
			  "default": "Benutzt die pflegebedürftige Person Kompressionsstrümpfe?",
			  "de": "139_Benutzt die pflegebedürftige Person Kompressionsstrümpfe?"
			},
			"clearIfInvisible": "onHidden",
			"isRequired": true,
			"choices": [
			  {
				"value": "0",
				"text": "Nein"
			  },
			  {
				"value": "1",
				"text": "Ja"
			  }
			],
			"placeholder": "bitte auswählen"
		  },
		  {
			"type": "dropdown",
			"name": "Bewegungseinschränkung",
			"visible": false,
			"visibleIf": "{Kompressionsstrümpfe} notempty",
			"title": {
			  "default": "Gibt es Einschränkungen der Bewegungsfähigkeit des Oberkörpers und/oder der Arme/Hände?",
			  "de": "25_Gibt es Einschränkungen der Bewegungsfähigkeit des Oberkörpers und/oder der Arme/Hände?"
			},
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{Bewegungseinschränkung} notempty",
			"title": {
			  "default": "Leidet die pflegebedürftige Person unter kognitiven Problemen (Gedächtnisproblemen)?",
			  "de": "83_Leidet die pflegebedürftige Person unter kognitiven Problemen (Gedächtnisproblemen)?"
			},
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{KognitiveProbleme} notempty",
			"title": {
			  "default": "Leidet die pflegebedürftige Person unter Inkontinenz?",
			  "de": "138_Leidet die pflegebedürftige Person unter Inkontinenz?"
			},
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{Inkontinenz} notempty",
			"title": "In welchem Kanton lebt die pflegebedürftige Person?",
			"clearIfInvisible": "onHidden",
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
			"visible": false,
			"visibleIf": "{Kanton} notempty",
			"title": "Bei welcher Krankenkasse ist die pflegebedürftige Person grundversichert?",
			"clearIfInvisible": "onHidden",
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
	  },
	  {
		"name": "page2",
		"title": {
		  "de": "Kontaktangaben"
		},
		"elements": [
		  {
			"type": "radiogroup",
			"name": "anrede",
			"title": {
			  "de": "Anrede"
			},
			"isRequired": true,
			"choices": [
			  {
				"value": "Frau",
				"text": {
				  "de": "Frau"
				}
			  },
			  {
				"value": "Herr.",
				"text": {
				  "de": "Herr"
				}
			  }
			]
		  },
		  {
			"type": "text",
			"name": "vorname",
			"title": {
			  "de": "Vorname\n"
			},
			"isRequired": true
		  },
		  {
			"type": "text",
			"name": "nachname",
			"title": {
			  "de": "Nachname\n"
			},
			"isRequired": true
		  },
		  {
			"type": "text",
			"name": "phone",
			"title": {
			  "de": "Geben Sie hier bitte eine Rückrufnummer an.\n"
			},
			"isRequired": true,
			"inputType": "tel"
		  },
		  {
			"type": "text",
			"name": "email",
			"title": {
			  "de": "Ihre Email-Adresse"
			},
			"isRequired": true,
			"inputType": "email"
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