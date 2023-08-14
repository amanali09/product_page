import { CURRENCY_SYMBOL } from "Constants";

const Price = ({ detail }) => (
  <p className="font-bold my-2">{`${CURRENCY_SYMBOL}${detail.price}`}</p>
);

export default Price;
