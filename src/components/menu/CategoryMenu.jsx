import React, { Fragment, useEffect, useState } from "react";
import CategoryMenuData from "../../data/CategoryMenuData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/CategoryMenuSlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(CategoryMenuData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const SelectedCategory = useSelector((state) => state.menu.value);
  return (
    <div className="container">
      <div className="flex flex-col items-center text-center leading-none">
        <h1 className="h1">Our Menu</h1>
        <p className="text-lg font-DMsans max-w-[550px]">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 my-20">
        <button
          className={`button ${
            SelectedCategory === "All" && "bg-wine text-white"
          }`}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </button>
        {categories.map((item, index) => {
          return (
            <Fragment key={index}>
              <button
                onClick={() => dispatch(setCategory(item))}
                className={`button ${
                  SelectedCategory === item && "bg-wine text-white"
                }`}
              >
                {item}
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
