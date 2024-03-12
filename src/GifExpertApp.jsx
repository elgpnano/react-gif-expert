import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";


const GifExpertApp = () => {

  const [category, setCategories] = useState(['OnePunch']);
  const [first, setfirst] = useState(1)

  const onAddCategories = (newCategory) => {
    if (category.includes(newCategory)) return;
    setCategories([newCategory, ...category]);

  }

  return (
    <>

      <AddCategory
        onNewCategory={(value) => onAddCategories(value)}
      />
      {
        category.map((respuesta) => (
          <GifGrid
            key={respuesta}
            category={respuesta}
          />
        ))
      }
      <br />
      {first}
      <br />
      <button onClick={() => setfirst(first + 1)}> + 1</button>
    </>
  )
}
export default GifExpertApp;