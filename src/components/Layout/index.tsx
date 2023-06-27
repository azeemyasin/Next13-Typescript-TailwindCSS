import React, { ReactNode } from "react";
import Head from "next/head";
// import Header from "@/components/Header";

type Props = {
  children?: ReactNode;
  title?: string;
  home?: boolean;
};

const Layout = ({
  children,
  title = "Travel Agency",
  home,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {/* <Header /> */}
    <main className="min-h-screen">{children}</main>
  </div>
);

export default Layout;