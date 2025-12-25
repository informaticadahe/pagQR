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
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6">{modelo.nombre}</h1>

      <div className="mb-6">
        <ThreeViewer obj={modelo.obj} mtl={modelo.mtl} name="" />
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg especificaciones" >
        <h2 className="text-2xl font-semibold mb-4">Especificaciones</h2>

        {modelo.tipo === "arma" && (
          <div className="grid grid-cols-2 gap-4">
            <li>
              <span className="font-semibold">Alcance:</span> {modelo.specs.alcance} M
            </li>
            <li>
              <span className="font-semibold">Largo:</span> {modelo.specs.largo} M
            </li>
            <li>
              <span className="font-semibold">Peso:</span> {modelo.specs.peso} KG
            </li>
            <li>
              <span className="font-semibold">Capacidad:</span> {modelo.specs.capacidad} municiones
            </li>
            <li>
              <span className="font-semibold">Munición:</span> {modelo.specs.municion} mm
            </li>
            <li>
              <span className="font-semibold">Cadencia:</span> {modelo.specs.cadencia} RPM
            </li>
            <li>
              <span className="font-semibold">Velocidad de bala:</span> {modelo.specs.velocidadBala} m/s
            </li>
          </div>
        )}

        {modelo.tipo === "vehiculo" && (
          <div className="grid grid-cols-2 gap-4">
            <li>
              <span className="font-semibold">Alcance:</span> {modelo.specs.alcance} Km
            </li>
            <li>
              <span className="font-semibold">Largo:</span> {modelo.specs.largo} M
            </li>
            <li>
              <span className="font-semibold">Ancho:</span> {modelo.specs.ancho} M
            </li>
            <li>
              <span className="font-semibold">Altura:</span> {modelo.specs.altura} M
            </li>
            <li>
              <span className="font-semibold">Peso:</span> {modelo.specs.peso} KG
            </li>
            <li>
              <span className="font-semibold">Capacidad:</span> {modelo.specs.capacidad} personas
            </li>
            <li>
              <span className="font-semibold">Motor:</span> {modelo.specs.motor}
            </li>
            <li>
              <span className="font-semibold">Autonomía:</span> {modelo.specs.distanciaCapacidad} Km
            </li>
            <li>
              <span className="font-semibold">Suspension:</span> {modelo.specs.suspension}
            </li>
            <li>
              <span className="font-semibold">Velocidad máxima:</span> {modelo.specs.velocidadMax} Km/h
            </li>
            <li>
              <span className="font-semibold">Armamento principal:</span> {modelo.specs.armamentoPrincipal}
            </li> 
            <li>
              <span className="font-semibold">Armamento secundario:</span> {modelo.specs.armamentoSecundario}
            </li>
          </div>
        )}

        {modelo.tipo === "material" && (
          <div>
            <p>{modelo.specs.descripcion || "Sin especificaciones disponibles"}</p>
          </div>
        )}
      </div>
    </div>
  );
}