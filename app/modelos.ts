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
  capacidad: string;
  distanciaCapacidad: number;
  velocidadMax: number;
  ancho: number;
  altura: number;
  motor: string;
  suspension: string;
  armamentoPrincipal: string;
  armamentoSecundario: string;
}

interface SpecsMaterial {
  descripcion?: string;
  [key: string]: any;
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
    id: "SHERMAN",
    nombre: "Tanque SHERMAN ",
    img: "/3D/images/sherman.png",
    tipo: "vehiculo",
    specs: {
      alcance: 161,
      largo: 6.9,
      ancho: 2.7,
      altura: 2.34,
      peso: 16700,
      capacidad: "2 + 9 pasajeros",
      armamentoPrincipal: "30 mm cañón automático",
      armamentoSecundario: "7.62 mm MG, M2HB 12,7 mm HMG",
      motor: "Iveco Cursor 9 motor diesel, 383 CV",
      suspension: "Hidroneumática",
      distanciaCapacidad: 193,
      velocidadMax: 110,
    },
    obj: "/3D/Sherman.obj",
    mtl: "/3D/Blank.mtl"
  },
  {
    id: "fal",
    nombre: "Fusil Automático Ligero",
    img: "/3D/images/fal.png",
    tipo: "arma",
    specs: {
      alcance: 600,
      largo: 1.09,
      peso: 4.45,
      capacidad: 20,
      municion: 7.62,
      cadencia: 650,
      velocidadBala: 823
    },
    obj: "/3D/FAL.obj",
    mtl: "/3D/FAL.mtl"
  },
  {
    id: "arco",
    nombre: "arco compuesto",
    img: "/3D/images/arco.png",
    tipo: "arma",
    specs: {
      alcance: 600,
      largo: 1.09,
      peso: 4.45,
      capacidad: 20,
      municion: 7.62,
      cadencia: 650,
      velocidadBala: 823
    },
    obj: "/3D/ARCODEF.obj",
    mtl: "/3D/ARCODEF.stl"
  },
  {
    id: "canon",
    nombre: "cañon",
    img: "/3D/images/canon.png",
    tipo: "arma",
    specs: {
      alcance: 600,
      largo: 1.09,
      peso: 4.45,
      capacidad: 20,
      municion: 7.62,
      cadencia: 650,
      velocidadBala: 823
    },
    obj: "/3D/canon.obj",
    mtl: "/3D/canon.mtl"
  }
];