import CardList from "./components/cardList";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-10 text-center max-w-4xl px-4">
        Visores 3D OBJ+MTL - Lista de Modelos
      </h1>
      <CardList />
    </div>
  );
}
