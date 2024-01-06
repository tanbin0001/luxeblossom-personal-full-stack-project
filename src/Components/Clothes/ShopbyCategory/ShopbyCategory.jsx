import { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel } from "react-tabs"; 
import ClothesCard from "./ClothesCard";
 


const ShopbyCategory = () => {
    const [topProducts, setTopProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (category) => {
        setActiveTab(category);
        
      };
    useEffect(() => {
        fetch('./clothes.json')
        .then(res => res.json())
            .then(data =>{setTopProducts(data)
                if (data.length > 0) {
                    setActiveTab(data[0].category);
                  }
            })
            
         
    }, []);
    return (
        <div className="my-20 xl:mx-20 ">
        <h1 className="flex items-center justify-center rounded-md   text-white text-3xl bg-red-500  mx-auto  my-10 marcellus   w-72 h-10">Shop By Categories</h1>
         <Tabs className='grid  xl:grid-cols-4 '>
        <div className="  flex justify-end">
        <div className="  bg-red-100 text-xl xl:h-[500px] w-72   space-y-5  text-center mb-5  xl:col-span-1">
               {topProducts.map((category) => (
                  <Tab
                  key={category.category}
                  className={`rounded-md list-none mx-5 w-56  font-bold text-1xl cursor-pointer marcellus ${
                    activeTab === category.category ? 'text-white bg-red-500' : ''
                  }`}
                  onClick={() => handleTabClick(category.category)}
                >{category.category}</Tab>
               ))}
           </div>
        </div>
          <div className="w-full   xl:col-span-3">
          {topProducts.map((category) => (
               <TabPanel   key={category.category}>
                   <div className="flex justify-center">
                       <div className="grid xl:grid-cols-3 gap-10">
                           {category.products.map((product) => (
                               <div className="pl-3 " key={product.name}>
                                 
                                   <div className=" ">
                               <ClothesCard product={product}></ ClothesCard>
                                   </div>
                               </div>

                           ))}
                       </div>
                   </div>
               </TabPanel>
           ))}
          </div>
       </Tabs>
   </div>
    );
};

export default ShopbyCategory;