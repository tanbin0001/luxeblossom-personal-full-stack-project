import Banner from "../Components/Home/Banner/Banner";
import Categories from "../Components/Home/Categories/Categories";
import Discount from "../Components/Home/Discount/Discount";
import TopProducts from "../Components/Home/TopProducts/TopProducts";

 
 

const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <Categories></Categories>
               <TopProducts></TopProducts>
                <Discount></Discount>
        </div>
    );
};

export default Home;