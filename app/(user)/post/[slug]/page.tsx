import { groq } from "next-sanity";
import { previewData } from "next/headers";
import Blog from "../../../../components/Blog";
import PreviewBlog from "../../../../components/PreviewBlog";
import PreviewSuspense from "../../../../components/PreviewSuspense";
import { client } from "../../../../lib/sanity.client";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']{
    slug
  }
`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug?.current);
  return slugRoutes.map((slug) => ({ slug }));
}

export const revalidate = 30;

async function page({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current==$slug][0]{
      ...,
      author->,
      categories[]->
    }
  `;

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
        <p className="text-center font-bold fixed left-3 top-3">
          (preview mode)
        </p>
        <PreviewBlog query={query} slug={slug} />
      </PreviewSuspense>
    );
  }

  const post: Post = await client.fetch(query, { slug });
  return <Blog post={post} />;
}

export default page;
