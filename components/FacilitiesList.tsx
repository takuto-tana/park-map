import { facilitiesData } from "@/app/contents/park-item";
import FacListTemplates from "./FacListTemplates";

const FacilitiesList = () => {
  return (
    <section id="info" className="mt-12">
      <h2 className="text-2xl font-bold text-center">施設案内</h2>
      <FacListTemplates categories={facilitiesData} />
    </section>
  );
};

export default FacilitiesList;