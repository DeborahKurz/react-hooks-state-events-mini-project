import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setTasks }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function updateButton(category) {
    setSelectedCategory(category);
    const newTasks = category === "All" ? tasks : tasks.filter((task) => {
      if(task.category === category) {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        const buttonClass = category === selectedCategory ? "selected" : "";
        return (
          <button
            key={category}
            className={buttonClass}
            onClick={() => updateButton(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
