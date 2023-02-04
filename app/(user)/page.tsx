import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import PreviewSuspense from "../../components/PreviewSuspense";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-red-400">
              Loading preview data...
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}

export default HomePage;
