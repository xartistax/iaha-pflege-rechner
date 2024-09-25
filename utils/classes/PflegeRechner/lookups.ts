interface Lookup {
    [key: string]: string;
  }
  
  export const mobilitaetLookup: Lookup = {
    '0': 'keine Einschränkung der Gehfähigkeit',
    '1': 'Gangunsicher oder benutzt Rollator',
    '2': 'ist auf einen Rollstuhl angewiesen',
    '3': 'ist bettlägerig'
  };
  
  export const aufstehenHinlegenLookup: Lookup = {
    '0': 'Aufstehen & Hinlegen ist selbständig möglich',
    '1': 'ist auf Hilfe beim Aufstehen & Hinlegen angewiesen'
  };
  
  export const lageAendernLookup: Lookup = {
    '0': 'Die Person kann ihre Lage und Position / Lage selbst verändern',
    '1': 'Die Person ist für die Lageänderung auf Hilfe angewiesen'
  };
  
  export const kompressionsstrumpfeLookup: Lookup = {
    '0': 'Ja',
    '1': 'Nein'
  };
  
  export const bewegungseinschraenkungLookup: Lookup = {
    '0': 'keine Einschränkung der Bewegung des Oberkörpers und/oder der Arme/Hände',
    '1': 'es bestehen Einschränkungen bei der Bewegung des Oberkörpers und/oder der Arme/Hände',
    '2': 'schwerste Einschränkungen des Oberkörpers und/oder der Arme/Hände (z.B. Tetraplegiker)'
  };
  
  export const kognitiveProblemeLookup: Lookup = {
    '0': 'keine kognitiven Einschränkungen',
    '1': 'leichte Form der Demenz',
    '2': 'schwere Form der Demenz'
  };
  
  export const inkontinenzLookup: Lookup = {
    '0': 'keine Inkontinenz',
    '1': 'Urin-Inkontinenz',
    '2': 'Stuhl-Inkontinenz',
    '3': 'beides'
  };
  
  export const geschlechtLookup: Lookup = {
    '0': 'Männlich',
    '1': 'Weiblich'
  };
  