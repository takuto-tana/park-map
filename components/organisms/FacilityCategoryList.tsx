import type { Category } from "@/app/contents/park-item";
import FacilityListItem from "../molecules/FacilityListItem";

type FacilityCategoryListProps = {
  categories: Category[];
  openId: number | null;
  onToggle: (id: number) => void;
};

const FacilityCategoryList = ({
  categories,
  openId,
  onToggle,
}: FacilityCategoryListProps) => {
  return (
    <div className="mt-6 space-y-8">
      {categories.map((category) => (
        <section key={category.category}>
          <h3 className="mb-4 text-xl font-bold">{category.category}</h3>

          <ul className="space-y-4">
            {category.items.map((item) => (
              <FacilityListItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => onToggle(item.id)}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default FacilityCategoryList;