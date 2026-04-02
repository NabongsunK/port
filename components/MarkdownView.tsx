import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownView({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children, ...props }) {
          const text = String(children ?? "");
          if (inline) {
            return (
              <code
                className="rounded bg-slate-100 px-1 py-0.5 dark:bg-slate-800"
                {...props}
              >
                {text}
              </code>
            );
          }
          return (
            <pre className="overflow-auto rounded bg-slate-950 p-4 dark:bg-slate-950">
              <code className={className} {...props}>
                {text}
              </code>
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

