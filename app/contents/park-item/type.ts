export type Facility = {
  id: number;
  name: string;
  description: string;
  images: string[];
};

export type Category = {
  category: string;
  items: Facility[];
};