import { ContextProductCount } from "../../utils/context-product";
import "./styles.css";
import { useContext } from "react";

export default function ProductCount() {
  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <>
      {contextProductCount > 0 && (
        <div className="dsf-product-count">
          {contextProductCount} produto(s)
        </div>
      )}
    </>
  );
}
