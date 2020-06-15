import React from "react";
import Head from "next/head";
// import Menu from 'components/navigation'
type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Xtrios - eXperience, eXpertise and eXcellence.",
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Menu /> */}
      <div
        role="main"
        className="w-full min-h-screen flex flex-col flex-grow bg-primary-on min-container main-content"
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
