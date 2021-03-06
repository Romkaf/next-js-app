import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
  title?: string;
}

const Layout: FC<ILayout> = ({ children, title }) => (
  <>
    <Head>
      <title>{title ? `${title} | NextJS App` : "NextJS App"}</title>
      <meta name="keywords" content="next,js,react" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
