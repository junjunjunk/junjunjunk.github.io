import React from 'react';

export const Spacer: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    size?: { height?: string | number; width?: string | number };
  }
> = ({ size }, style, ...props) => (
  <div
    style={{
      width: size?.width ?? '20px',
      height: size?.height ?? '20px',
      ...style,
    }}
    {...props}
  ></div>
);
