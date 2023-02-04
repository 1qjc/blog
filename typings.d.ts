interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: Author;
  description: string;
  categories: Category[] | null;
  title: string;
  body?: Body[];
  mainImage?: Image;
  publishedAt?: string;
  slug?: Slug;
}

interface Author {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  bio: Body[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Body {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

interface Image {
  _type: string;
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: string;
}

interface Slug {
  _type: string;
  current: string;
}

interface Category {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  description: string;
  title: string;
}
