import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import foodItems from "./FoodItems";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = [
  "all",
  ...new Set(foodItems.map((item) => item.category)),
];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(foodItems);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(foodItems);
      return;
    }
    console.log(category);
    const newItems = foodItems.filter((item) => item.category === category);

    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu foodItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
