// /* eslint-disable react/prop-types */
// import { Button, Card } from "keep-react";

 

// const Category = ({category}) => {
//     const {categoryName, imgUrl} = category;
//     return (
//         <div >
//         <Card className="w-72 overflow-hidden rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 h ">
//   <img
 
//     src={imgUrl}
//     alt={categoryName}
//     className="w-full h-full object-cover rounded-full  "
//   />
 
 
// </Card>


//         </div>
//     );
// };

// export default Category;


/* eslint-disable react/prop-types */
 
import { useState } from "react";
import "./Category.css"; // Import your CSS file
import { Card } from "keep-react";

const Category = ({ category }) => {
  const { categoryName, imgUrl } = category;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="category-container">
      <Card
        className={`xl:w-52 sm:w-52 overflow-hidden rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300   ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overlay">
          <span className="category-name text-white font-bold satisfy text-3xl">{categoryName}</span>
        </div>
        <img src={imgUrl} alt={categoryName} className="w-full h-full object-cover rounded-full" />
      </Card>
    </div>
  );
};

export default Category;
