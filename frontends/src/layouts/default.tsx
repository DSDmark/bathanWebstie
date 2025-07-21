import React from "react";

interface IMainLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: IMainLayout) => {
  return <>{children}</>;
};

export default Layout;
