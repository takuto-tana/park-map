import { ParkItem } from "@/app/contents/park-item";
import FacilityToggleButton from "../atoms/FacilityToggleButton";
import FacilityDescription from "../atoms/FacilityDescription";

type FacilityListItemProps = {
    item: ParkItem;
    isOpen: boolean;
    onClick: () => void;
};

const FacilityListItem = ({ item, isOpen, onClick}: FacilityListItemProps) => {
    return (
        <li>
            <FacilityToggleButton
             name={item.name}
             isOpen={isOpen}
             onClick={onClick}
            />

            {isOpen && (
                <FacilityDescription
                 description={item.description}
                 images={item.images}
                />
            )}
        </li>
    );
};

export default FacilityListItem;