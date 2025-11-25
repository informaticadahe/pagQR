// Tipos base
interface SpecsArma {
  alcance: number;
  largo: number;
  peso: number;
  capacidad: number;
  municion: number;
  cadencia: number;
  velocidadBala: number;
}

interface SpecsVehiculo {
  alcance: number;
  largo: number;
  peso: number;
  capacidad: number;
  distanciaCapacidad: number;
  velocidadMax: number;
  capacidadTanque: number;
}

interface SpecsMaterial {
  descripcion?: string;
  [key: string]: any; // Para propiedades flexibles
}

// Modelos con tipos discriminados
interface ModeloArma {
  id: string;
  nombre: string;
  img: string;
  obj: string;
  mtl: string;
  tipo: "arma";
  specs: SpecsArma;
}

interface ModeloVehiculo {
  id: string;
  nombre: string;
  img: string;
  obj: string;
  mtl: string;
  tipo: "vehiculo";
  specs: SpecsVehiculo;
}

interface ModeloMaterial {
  id: string;
  nombre: string;
  img: string;
  obj: string;
  mtl: string;
  tipo: "material";
  specs: SpecsMaterial;
}

export type Modelo = ModeloArma | ModeloVehiculo | ModeloMaterial;

export const modelos: Modelo[] = [
  {
    id: "sherman",
    nombre: "Sherman",
    img: "/3D/images/sherman.png",
    tipo: "vehiculo",
    specs: {
      alcance: 161,
      largo: 5.84,
      peso: 30300,
      capacidad: 5,
      distanciaCapacidad: 193,
      velocidadMax: 42,
      capacidadTanque: 660
    },
    obj: "/3D/Sherman.obj",
    mtl: "/3D/Blank.mtl"
  },
  {
    id: "fal",
    nombre: "FAL",
    img: "/3D/images/fal.png",
    tipo: "arma",
    specs: {
      alcance: 600,
      largo: 1.05,
      peso: 4.45,
      capacidad: 20,
      municion: 7.62,
      cadencia: 650,
      velocidadBala: 823
    },
    obj: "/3D/FAL.obj",
    mtl: "/3D/FAL.mtl"
  }
];