import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;

  return (
    <div>
      {/* Header */}
      {/* Accordian Body  */}
      <div className="shadow-lg w-6/12 bg-gray-50  p-4 m-auto my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            // console.log("cicked header accordian");
            setShowIndex();
          }}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems && <span>⬇️</span>}
          {!showItems && <span>⬆️</span>}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
