import { parkItems } from "@/app/contents/park-item";

export const FacilitiesList = () => {
    return (
        <section id="info" className="mt-12">
            <h2 className="text-2xl font-bold text-center">施設案内</h2>

            <ul className="mt-6 space-y-4">
                {parkItems.map((item) => (
                    <li key={item.id} className="rounded-lg border p-4 shadow-sm">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};