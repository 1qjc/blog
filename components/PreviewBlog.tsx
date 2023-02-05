"use client";

import { groq } from "next-sanity";
import { usePreview } from "../lib/sanity.preview";
import Blog from "./Blog";

type Props = {
  slug: string;
  query: string;
};

const PreviewBlog = ({ slug }: Props) => {
  const query = groq`
  *[_type=='post' && slug.current==$slug][0]{
    ...,
    author->,
    categories[]->
  }
`;
  const post = usePreview(null, query, { slug });
  console.log("Loading...", post);
  return <Blog post={post} />;
};
export default PreviewBlog;
