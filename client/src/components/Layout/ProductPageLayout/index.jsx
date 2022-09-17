import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import ProductHeader from "../Header/ProductPage";

const ProductPageLayout = (props) => {
  return (
    <div>
      <ProductHeader />
      <Menu />
      <main className="min-h-screen  py-4 max-w-screen-xl w-screen  mx-auto">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPageLayout;
