import * as React from "react";
import Head from "next/head";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer></footer>
  </div>
);

export default Layout;
