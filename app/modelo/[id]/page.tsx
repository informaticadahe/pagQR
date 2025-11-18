import React from "react";
import { modelos, Modelo } from "../../modelos";
import ThreeViewer from "../../components/3Dvista";

interface ModeloPageProps {
  params: Promise<{ id: string }>;
}

export default function ModeloPage({ params }: ModeloPageProps) {
  const { id } = React.use(params);

  const modelo = modelos.find((m: Modelo) => m.id === id);

  if (!modelo) {
    return <div>Modelo no encontrado</div>;
  }

  return (
    <div>
      <h1>{modelo.nombre}</h1>
      <ThreeViewer obj={modelo.obj} mtl={modelo.mtl} name={modelo.nombre} />
    </div>
  );
}