"use client";
import Link from "next/link";
import Image from "next/image";
import { modelos } from "../modelos";

export default function CardList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-12xl mx-auto p-4">
      {modelos.map((item) => (
        <Link
          href={`/modelo/${item.id}`}
          key={item.id}
          className="border rounded shadow hover:shadow-lg p-2 flex flex-col items-center linkCard"
        >
          <div className="imgCard mb-10">
            <Image 
              src={item.img} 
              alt={item.nombre} 
              fill
              className="object-cover" 
            />
          </div>
          <p className="text-center font-semibold">{item.nombre}</p>
        </Link>
      ))}
    </div>
  );
}