import { ParkItem } from "@/app/contents/park-item";
import FacilityDetail from "./FacilityDetail";

type FacListTemplatesProps = {
    items: ParkItem[];
};

const FacListTemplates = ({ items }: FacListTemplatesProps) => {
    return (
        <div className="max-w-4xl mx-auto">
            <FacilityDetail items={items}/>
        </div>
    );
};

export default FacListTemplates;