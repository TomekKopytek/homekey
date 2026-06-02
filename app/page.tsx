import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-neutral-100 pt-24">
        <h1 className="text-center text-4xl font-bold">
          Strona Główna
        </h1>
      </main>
    </>
  );
}
