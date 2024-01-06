import { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel } from "react-tabs";
import TopProduct from "./TopProduct";


const TopProducts = () => {
    const [topProducts, setTopProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (category) => {
        setActiveTab(category);
        
      };
    useEffect(() => {
        fetch('./topProducts.json')
        .then(res => res.json())
            .then(data =>{setTopProducts(data)
                if (data.length > 0) {
                    setActiveTab(data[0].category);
                  }
            })
            
         
    }, []);
    return (
        <div className="my-20">
             <h1 className="flex items-center justify-center rounded-md  text-white text-3xl bg-red-500  mx-auto my-10 marcellus   w-52 h-10">New Products</h1>
              <Tabs className=''>
              <div className="  justify-center text-2xl flex lg:w-[700px] p-1  text-center mx-auto mb-5  ">
                    {topProducts.map((category) => (
                       <Tab
                       key={category.category}
                       className={`list-none mx-5 satisfy font-bold text-3xl cursor-pointer ${
                         activeTab === category.category ? 'text-red-500' : ''
                       }`}
                       onClick={() => handleTabClick(category.category)}
                     >{category.category}</Tab>
                    ))}
                </div>
                {topProducts.map((category) => (
                    <TabPanel key={category.category}>
                        <div className="flex justify-center">
                            <div className="grid xl:grid-cols-3 gap-10">
                                {category.products.map((product) => (
                                    <div className="pl-3 " key={product.name}>
                                      
                                        <div className=" ">
                                    <TopProduct product={product}></TopProduct>
                                        </div>
                                    </div>
 
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default TopProducts;