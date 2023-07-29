import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="leading-7 mt-6">
      {children}
    </p>
  );
}
