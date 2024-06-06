import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <div id="modal" />
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
