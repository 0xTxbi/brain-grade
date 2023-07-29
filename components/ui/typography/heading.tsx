import React from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
};

const headingLevelClassNames: { [key: number]: string } = {
  1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  4: "scroll-m-20 text-xl font-semibold tracking-tight",
};

export function Heading({ level = 4, children }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const className = `scroll-m-20 font-semibold tracking-tight ${headingLevelClassNames[level] || headingLevelClassNames[4]}`;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}
