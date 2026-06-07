import FacilitiesList from "@/components/FacListTemplates";
import Header from "@/components/Header";
import HeroArea from "@/components/organisms/HeroArea";
import MapArea from "@/components/organisms/MapArea";
import { parkItems } from "./contents/park-item";

export default function Home() {
  return (
    <div id="top" className="min-h-screen pt-20">
      <Header />

      <main className="p-6">
        <HeroArea />
        <MapArea />
        <FacilitiesList items={parkItems}/>
      </main>
    </div>
  );
}