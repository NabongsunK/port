import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Localt = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    thema: post.thema,
  };

  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container thema={customMeta.thema} customMeta={customMeta}>
      <div className="my_blog_slug mt-10 prose">
        <h1 className="text-sky-700">{post.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Localt;
