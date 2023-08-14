import ProductLeft from "components/pages/product/ProductLeft";
import Gallery from "components/pages/product/Gallery";
import Footer from "components/pages/product/Footer";
import Title from "components/pages/product/main/Title";
import Price from "components/pages/product/main/Price";
import { PRODUCT_DETAIL } from "Constants";
import Color from "components/pages/product/main/Colors";
import Sizes from "components/pages/product/main/Sizes";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useCallback, useContext, useEffect, useState } from "react";
import Offers from "components/pages/product/main/Offers";
import { CartContext } from "context/CartContext";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const product = PRODUCT_DETAIL;

  const [form, setForm] = useState({ size: "", color: 1 });

  const handleForm = useCallback(
    (name, value) => setForm((prev) => ({ ...prev, [name]: value })),
    []
  );

  const handleScroll = () => {
    const targetDiv = document.getElementById("last-img");

    if (targetDiv) {
      const rect = targetDiv.getBoundingClientRect();
      let position = "sticky";
      if (rect.top <= 0) {
        position = "inherit";
      }
      document.getElementById("left-panel").style.position = position;
      document.getElementById("right-panel").style.position = position;
      document.getElementById("heart").style.position = position;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, [0]);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-3">
      <div className="grid grid-flow-row-dense sm:grid-cols-3 gap-12">
        <ProductLeft />
        <Gallery detail={product} form={form} />
        <div className="pt-14 sm:pr-12 ">
          <div className="sm:sticky top-0" id="right-panel">
            <Title detail={product} />
            <Price detail={product} />
            <Color detail={product} form={form} handleForm={handleForm} />
            <Sizes detail={product} form={form} handleForm={handleForm} />
            <button
              onClick={addToCart}
              type="button"
              className="flex gap-2 items-center uppercase mt-8 w-full justify-center border border-transparent bg-black px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 rounded-full"
            >
              <span>Add to bag</span>
              <ArrowLongRightIcon className="w-6 h-6" />
            </button>
            <Offers />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
