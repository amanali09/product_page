import CartProvider from "context/CartContext";
import Header from "components/common/Header";
import "globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={roboto.className}>
      <CartProvider>
        <Header />
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </div>
  );
}
