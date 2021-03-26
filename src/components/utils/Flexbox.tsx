import React from 'react';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

export const Flexbox: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    alignItems?: AlignItemsProperty;
    justifyContent?: JustifyContentProperty;
  }
> = ({ alignItems, justifyContent, style, ...props }) => (
  <div
    style={{
      display: 'flex',
      alignItems: alignItems,
      justifyContent: justifyContent,
      ...style,
    }}
    {...props}
  ></div>
);
