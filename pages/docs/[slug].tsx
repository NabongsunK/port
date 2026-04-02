import Container from "components/Container";
import MarkdownView from "components/MarkdownView";
import metadata from "data/metadata";
import { getDocsEntries } from "utils/docs";
import fs from "fs";

export const getStaticPaths = async () => {
  const docs = getDocsEntries();
  return {
    paths: docs.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const docs = getDocsEntries();
  const slug = String(params?.slug ?? "");
  const doc = docs.find((d) => d.slug === slug);

  if (!doc) {
    return { notFound: true };
  }

  return {
    props: {
      doc,
      content: fs.readFileSync(doc.filePath, "utf8"),
    },
  };
};

const DocDetail = ({ doc, content }: any) => {
  return (
    <Container
      customMeta={{
        title: doc.title,
        description: doc.description,
        author: metadata.author,
      }}
    >
      <div className="prose prose-sky mt-10 dark:prose-invert max-w-none">
        <MarkdownView content={content} />
      </div>
    </Container>
  );
};

export default DocDetail;

