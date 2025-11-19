export interface Modelo {
  id: string;
  nombre: string;
  img: string;
  obj: string;
  mtl: string;
}

export const modelos: Modelo[] = [
  {
    id: "sherman",
    nombre: "Sherman",
    img: "/3D/images/sherman.png",
    obj: "/3D/Sherman.obj",
    mtl: "/3D/Blank.mtl"
  },
  {
    id: "fal",
    nombre: "FAL",
    img: "/3D/images/fal.png",
    obj: "/3D/FAL.obj",
    mtl: "/3D/FAL.mtl"
  },
  // ...más modelos
];