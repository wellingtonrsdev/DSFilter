/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./styles.css";

type FormData = {
  priceMin?: number;
  priceMax?: number;
};

export default function Filter() {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <form className="dsf-filter-container dsf-container" onSubmit={handleSubmit}>
      <input
        name="priceMin"
        value={formData.priceMin}
        placeholder="Preço mínimo"
        type="text"
        onChange={handleInputChange}
      />

      <input
        name="priceMax"
        value={formData.priceMax}
        placeholder="Preço máximo"
        type="text"
        onChange={handleInputChange}
      />
      <button type="submit">Filtrar</button>
    </form>
  );
}
