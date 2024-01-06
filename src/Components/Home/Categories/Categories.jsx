/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Category from "../Category/Category";

 

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data.beautyCategories))
    },[])
    return (
        <div className="my-20 "  >
            <h1 className="text-6xl  mb-24 satisfy text-center text-red-500">Categories</h1>
       <div className="xl:flex mx-20  
        justify-between">
       {categories.map((category, index) => (
          <Category key={category.id} category={category}></Category>
        ))}
       </div>
      </div>
    );
};

export default Categories;