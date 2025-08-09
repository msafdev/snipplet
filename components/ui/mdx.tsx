import * as runtime from "react/jsx-runtime";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import CopyButton from "../client/copy-button";

// Base element helpers
type WithChildren<T = unknown> = T & { children?: ReactNode };

// Shared MDX components
export const sharedComponents = {
  // Headings
  h1: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"h1">>) => (
    <h1 className="text-xl font-semibold text-foreground" {...props}>
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"h2">>) => (
    <h2 className="text-lg mt-8 font-semibold text-foreground" {...props}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"h3">>) => (
    <h3 className="text-base mt-6 font-semibold text-foreground" {...props}>
      {children}
    </h3>
  ),
  h4: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"h4">>) => (
    <h4 className="text-base mt-6 font-medium text-foreground" {...props}>
      {children}
    </h4>
  ),
  h5: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"h5">>) => (
    <h5 className="text-base mt-6 font-medium text-foreground" {...props}>
      {children}
    </h5>
  ),
  h6: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"h6">>) => (
    <h6 className="text-base mt-4 font-medium text-foreground" {...props}>
      {children}
    </h6>
  ),

  // Text
  p: ({ children, ...props }: WithChildren<ComponentPropsWithoutRef<"p">>) => (
    <p
      className="text-muted-foreground leading-relaxed text-sm [&:not(:first-child)]:mt-4"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({
    children,
    href,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"a">>) => (
    <a
      href={href}
      className="text-primary font-medium underline underline-offset-2"
      {...props}
    >
      {children}
    </a>
  ),

  // Lists
  ul: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"ul">>) => (
    <ul
      className="[&:not(:last-child)]:my-6 ml-6 list-disc [&>li]:mt-2 [&>li]:text-sm"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"ol">>) => (
    <ol
      className="[&:not(:last-child)]:my-6 ml-6 list-decimal [&>li]:mt-2 [&>li]:text-sm"
      {...props}
    >
      {children}
    </ol>
  ),

  // Definition
  dl: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"dl">>) => (
    <dl className="mt-6 space-y-4" {...props}>
      {children}
    </dl>
  ),
  dt: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"dt">>) => (
    <dt className="text-sm font-medium text-foreground" {...props}>
      {children}
    </dt>
  ),
  dd: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"dd">>) => (
    <dd className="mt-1 pl-2 text-sm text-muted-foreground" {...props}>
      {children}
    </dd>
  ),

  // Code
  pre: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"pre">>) => {
    const extractTextContent = (node: any): string => {
      if (typeof node === "string") return node;
      if (typeof node === "number") return String(node);
      if (Array.isArray(node)) return node.map(extractTextContent).join("");
      if (node?.props?.children) return extractTextContent(node.props.children);
      return "";
    };

    const codeText = extractTextContent(children);

    return (
      <div className="relative group my-6">
        <pre
          className="p-4 rounded overflow-x-auto text-sm font-mono bg-muted [&>code]:bg-transparent"
          {...props}
        >
          {children}
        </pre>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton text={codeText} />
        </div>
      </div>
    );
  },
  code: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"code">>) => (
    <code
      className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium"
      {...props}
    >
      {children}
    </code>
  ),

  // Blockquote
  blockquote: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"blockquote">>) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
      {children}
    </blockquote>
  ),

  // Tables
  table: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"table">>) => (
    <div className="overflow-x-auto [&:not(:first-child)]:mt-6 mb-6 rounded border">
      <table className="min-w-full" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"thead">>) => (
    <thead
      className="bg-accent text-accent-foreground border-b border-border/20"
      {...props}
    >
      {children}
    </thead>
  ),
  tbody: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"tbody">>) => (
    <tbody className="divide-y" {...props}>
      {children}
    </tbody>
  ),
  tr: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"tr">>) => (
    <tr
      className="hover:bg-accent/40 transition-colors duration-150"
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"th">>) => (
    <th
      className="px-4 py-2.5 text-left text-xs font-medium tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"td">>) => (
    <td
      className="px-4 py-3 whitespace-nowrap text-xs text-foreground"
      {...props}
    >
      {children}
    </td>
  ),

  // HR
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr
      className="my-20 border-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      {...props}
    />
  ),

  // Inline styles
  strong: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"strong">>) => (
    <strong className="font-medium text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({
    children,
    ...props
  }: WithChildren<ComponentPropsWithoutRef<"em">>) => (
    <em className="italic text-foreground" {...props}>
      {children}
    </em>
  ),

  // Images
  Image,
};

// --- Compile MDX string to a component ---
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// --- MDXContent component ---
interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
  [key: string]: any;
}

export const MDXContent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
};
