import { Pet } from "./pet";

export interface User {
  id: number;
  nome: string;
  contato: string;
  cidade: string;
  email: string;
  documento: string;
  // petsEmDoacao: Pet[];
  // petsInteressados: Pet[];
}
