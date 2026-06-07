import { ParkItem } from "@/app/contents/park-item";
import FacilityListItem from "../molecules/FacilityListItem";

type FacilityCategoryListProps = {
    items: ParkItem[];
    openId: number | null;
    onToggle: (id: number) => void;
};

const FacilityCategoryList = ({
    items,
    openId,
    onToggle,
}: FacilityCategoryListProps) => {
    return (
        <ul>
            {items.map((item) => (
                <FacilityListItem
                 key={item.id}
                 item={item}
                 isOpen={openId === item.id}
                 onClick={() => onToggle(item.id)}
                />
            ))}
        </ul>
    );
};

export default FacilityCategoryList;