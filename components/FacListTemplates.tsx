import { Category } from "@/app/contents/park-item";
import FacilityDetail from "./FacilityDetail";
import ButtonList from "./molecules/ButtonList";

type  FacListTemplatesProps = {
    categories: Category[];
};

const FacListTemplates = ({ categories}: FacListTemplatesProps) => {
    return (
        <div className="max-w-4xl mx-auto">
            <ButtonList categories={categories} />
            <FacilityDetail categories={categories} />
        </div>
    );
};

export default FacListTemplates;