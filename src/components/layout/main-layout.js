import Footer from "../footer/Footer";
import Header from "../header/Header";

const mainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main> {children}</main>
      <Footer></Footer>
    </>
  );
};

export default mainLayout;
