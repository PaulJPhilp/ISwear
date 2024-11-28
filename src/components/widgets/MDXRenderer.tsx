import React from 'react';

interface MDXRendererProps {
  content: string;
}

export default function MDXRenderer({ content }: MDXRendererProps) {
  return (
    <div className="mdx-content">
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}