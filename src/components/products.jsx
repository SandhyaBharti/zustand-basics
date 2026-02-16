import { useMemo } from "react";
import useDebounce from "../hooks/useDebounce";

const products = [
  "Book",
  "Pen",
  "Pencil",
  "Notebook",
  "Calculator",
  "Mouse",
  "Keyboard",
];

const Products = ({ filter }) => {
  const delayedData = useDebounce(filter, 500);

  const results = useMemo(() => {
    if (!delayedData) return products;

    return products.filter((product) =>
      product.toLowerCase().includes(delayedData.trim().toLowerCase())
    );
  }, [delayedData]);

  return (
    <div className="h-full flex flex-col items-center gap-y-10">
      <h1 className="text-4xl font-bold tracking-tight">Products</h1>

      <ul className="w-full max-w-xl">
        {results.map((product, index) => (
          <li
            className="border rounded-sm px-4 py-2 mb-4 last:mb-0"
            key={index}
          >
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
