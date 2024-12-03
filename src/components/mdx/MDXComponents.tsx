import * as React from 'react';

// Helper function to generate stable keys from content
const generateKey = (content: string) => {
  return content
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .slice(0, 50); // Limit key length
};

// Helper function to add keys to any React element children
const addKeysToChildren = (children: React.ReactNode): React.ReactNode => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    
    // Generate a key based on the child's content or type
    const key = child.props.children 
      ? generateKey(child.props.children.toString())
      : `${child.type}-${Math.random().toString(36).slice(2, 7)}`;
    
    // Recursively add keys to this child's children
    const childrenWithKeys = child.props.children 
      ? addKeysToChildren(child.props.children)
      : child.props.children;
    
    return React.cloneElement(child, { key, children: childrenWithKeys });
  });
};

export const MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => {
    // Skip rendering h1 since it's the title from frontmatter
    return null;
  },
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-xl font-semibold mb-3">{addKeysToChildren(children)}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-medium mb-2">{addKeysToChildren(children)}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4">{addKeysToChildren(children)}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-1">
      {addKeysToChildren(children)}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1">
      {addKeysToChildren(children)}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="ml-4">{addKeysToChildren(children)}</li>
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
      {addKeysToChildren(children)}
    </a>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold">{addKeysToChildren(children)}</strong>
  ),
};
