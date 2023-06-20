import Accueil from "@/components/Accueil";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Accueil />
    </main>
  );
}
