import Banner from "../Components/Home/Banner/Banner";
import Categories from "../Components/Home/Categories/Categories";
import Discount from "../Components/Home/Discount/Discount";
import OurBrands from "../Components/Home/OurBrands/OurBrands";
import SalesOf from "../Components/Home/SalesOf/SalesOf";
import TopProducts from "../Components/Home/TopProducts/TopProducts";
 
 

const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <Categories></Categories>
               <TopProducts></TopProducts>
                <OurBrands></OurBrands>
               <SalesOf></SalesOf>
                <Discount></Discount>
        </div>
    );
};

export default Home;