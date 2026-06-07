import { Category } from "@/app/contents/park-item";

type ButtonListProps = {
    categories: Category[];
};

const getCategoryId = (category: string) => {
    return `category-${category}`;
};

const ButtonList = ({categories}: ButtonListProps) => {
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
                <a
                 key={category.category}
                 href={`#${getCategoryId(category.category)}`}
                 className="rounded-full bg-gray-200 px-4 py-2 text-sm font-bold hover:bg-gray-300"
                >
                    {category.category}
                </a>
            ))}
        </div>
    );
};

export default ButtonList;