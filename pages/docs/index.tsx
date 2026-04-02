import Link from "next/link";
import Container from "components/Container";
import { getDocsEntries } from "utils/docs";

export const getStaticProps = async () => {
  const docs = getDocsEntries()
    // README.md 같은 최상위 문서는 제외(원치 않으면 여기도 수정)
    .filter((d) => !d.slug.endsWith("__README") && !d.title.toLowerCase().includes("readme"))
    // 제목으로 정렬
    .sort((a, b) => a.title.localeCompare(b.title));

  return {
    props: {
      docs: docs.map((d) => ({ slug: d.slug, title: d.title, description: d.description })),
    },
  };
};

const DocsIndex = ({ docs }: any) => {
  return (
    <Container customMeta={{ title: "Docs", description: "문서 모음" }}>
      <div className="mt-10 flex flex-col">
        <div className="text-3xl font-extrabold text-sky-600 mb-6">문서</div>
        <div className="flex flex-col">
          {docs.map((doc: any) => (
            <Link href={`/docs/${doc.slug}`} key={doc.slug} passHref>
              <a className="my-6 hover:-translate-x-1.5 transition-transform">
                <div className="font-extrabold text-3xl text-gray-800 dark:text-gray-100">
                  {doc.title}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-300 text-xl mt-2">
                  {doc.description}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DocsIndex;

