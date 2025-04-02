import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-0 relative">
      <Header />
      <main className="z-auto relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
