import { CDN_URL, MENU_IMAGE_ALT } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;
  //   console.log(items);
  //   console.log("dummy data recieved :" + dummy);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left h-36">
          <div className="flex justify-between">
            <div className="w-2/3">
              <span className="pr-2 font-bold">{item?.card?.info?.name}</span>
              <span>₹{(item?.card?.info?.price / 100) | (item?.card?.info?.defaultPrice / 100)}</span>
              <p className="text-xs"> {item?.card?.info?.description}</p>
            </div>
            <div className="relative">
              <img src={item?.card?.info?.imageId ? CDN_URL + item?.card?.info?.imageId : MENU_IMAGE_ALT} className="w-40 h-20" alt="not found" />
              <button className="p-2 m-auto bg-gray-800 text-white shadow-lg absolute top-12 rounded-md">Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
