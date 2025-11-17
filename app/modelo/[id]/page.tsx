"use client";
import * as React from "react";
import { modelos } from "../../modelos";
import ThreeViewer from "../../components/3Dvista";

export default function ModeloPage({ params }) {
  const { id } = React.use(params); // <-- la forma correcta en Next.js 15

  const modelo = modelos.find((m) => m.id === id);
  if (!modelo) return <p>Modelo no encontrado.</p>;
  return <ThreeViewer obj={modelo.obj} mtl={modelo.mtl} name={modelo.nombre}  className="asd"/>;
}
