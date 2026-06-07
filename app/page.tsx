import FacilitiesList from "@/components/FacilitiesList";
import Header from "@/components/Header";
import HeroArea from "@/components/organisms/HeroArea";
import MapArea from "@/components/organisms/MapArea";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <HeroArea />
        <MapArea />
        <FacilitiesList />
      </main>
    </div>
  );
}