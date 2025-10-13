import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto max-w-7xl px-6 sm:px-10 lg:px-8 xl:px-0  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
