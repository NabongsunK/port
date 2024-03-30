import Link from "next/link";

interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ date, title, des, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-2xl text-gray-400">{date}</div>
        <div className={`font-extrabold text-4xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-2xl mt-1`}>{des}</div>
      </a>
    </Link>
  );
};

export default BlogPost;
