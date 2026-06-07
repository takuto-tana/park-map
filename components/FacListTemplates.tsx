import { Category } from "@/app/contents/park-item";
import FacilityDetail from "./FacilityDetail";

type  FacListTemplatesProps = {
    categories: Category[];
};

const FacListTemplates = ({ categories}: FacListTemplatesProps) => {
    return (
        <div className="max-w-4xl mx-auto">
            <FacilityDetail categories={categories} />
        </div>
    );
};

export default FacListTemplates;