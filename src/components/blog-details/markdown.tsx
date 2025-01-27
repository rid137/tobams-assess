import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownData = {
    content: string | undefined;
    bodyHtml: string | undefined;
}

const RenderMarkdown = ({ content, bodyHtml }: MarkdownData) => {
    return (
        <div className="markdown-content">
            {/* Render the raw HTML */}
            <div
                className="html-body"
                dangerouslySetInnerHTML={{ __html: bodyHtml as string }}
            />

            {/* Render the markdown content */}
            <div className="markdown-body text-md leading-relaxed mb-8">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-4" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                        h4: ({ node, ...props }) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
                        h5: ({ node, ...props }) => <h5 className="text-base font-semibold mt-4 mb-2" {...props} />,
                        h6: ({ node, ...props }) => <h6 className="text-sm font-semibold mt-4 mb-2" {...props} />,
                        p: ({ node, ...props }) => <p className="text-base my-4" {...props} />,
                        img: ({ node, ...props }) => <img className="my-4 w-full h-auto object-cover" {...props} />,
                        a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
                        li: ({ node, ...props }) => <li className="ml-6 my-2 list-disc" {...props} />,
                        ol: ({ node, ...props }) => <ol className="ml-6 my-2 list-decimal" {...props} />,
                        ul: ({ node, ...props }) => <ul className="ml-6 my-2 list-disc" {...props} />,
                        code: ({ node, ...props }) => (
                            <code className={`bg-gray-100 p-1 rounded block my-2`} {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
                        ),
                        table: ({ node, ...props }) => (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full my-4 border-collapse" {...props} />
                            </div>
                        ),
                        thead: ({ node, ...props }) => <thead className="bg-gray-200" {...props} />,
                        tbody: ({ node, ...props }) => <tbody {...props} />,
                        tr: ({ node, ...props }) => <tr className="border-b" {...props} />,
                        th: ({ node, ...props }) => (
                            <th className="px-4 py-2 text-left font-semibold" {...props} />
                        ),
                        td: ({ node, ...props }) => (
                            <td className="px-4 py-2 text-left" {...props} />
                        ),
                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                        del: ({ node, ...props }) => <del className="line-through" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default RenderMarkdown;
