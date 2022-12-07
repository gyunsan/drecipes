import React from "react";

export default function CategoryList({ categories, setCategory }) {
  return (
    <div>
      {categories.map((category) => {
        return (
          <a
            key={category}
            onClick={() => setCategory(category)}
            className="my-2 line-clamp-1 hover:underline hover:cursor-pointer capitalize"
          >
            {category}
          </a>
        );
      })}
    </div>
  );
}
