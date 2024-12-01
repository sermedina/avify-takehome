export interface GenerationMix {
    fuel: string; 
    perc: number; 
  }
  
  export interface EnergyGenerationData {
    from: string; 
    to: string;   
    generationmix: GenerationMix[]; 
  }