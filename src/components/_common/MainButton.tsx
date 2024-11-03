import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  styles: string; 
  title: string; 
  cssStyles?: React.CSSProperties; 
};

const MainButton: React.FC<Props> = ({ styles, title, cssStyles, ...rest }) => {
  return (
    <button
      className={`border-none px-8 py-2 rounded-sm font-semibold button-hover ${styles} bg-secondary-dark`}
      style={cssStyles}
      {...rest} 
    >
      {title}
    </button>
  );
};

export default MainButton;
