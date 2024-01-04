 
 import lady from '../../../assets/lady.png'
 import { Button } from "keep-react";

import './Discount.css'
const Discount = () => {
  

    return (
        <section className="background-section mb-20">
 <div className='flex justify-around  items-center  w-full h-full'>

    {/* text container */}
    <div className='text-white  '>
   <div className='space-y-5'>
   <p className='text-4xl marcellus'>Special Offer</p>
    <div className='flex space-x-5'>
    <h1 className='titanOne   text-8xl '>S</h1>
    <h1 className='titanOne   text-8xl '>A</h1>
    <h1 className='titanOne   text-8xl '>L</h1>
    <h1 className='titanOne   text-8xl '>E</h1>
    </div>
        <h2 className='text-4xl marcellus font-bold'>UP TO 50% OFF</h2>
        <div className='text-3xl marcellus'>
            <h3>ONLY</h3>
            <h3>TODAY</h3>
   </div>
   <Button className='bg-white text-red-500 w-32 h-10 text-2xl rounded-full '>
    Shop Now
   </Button>
        </div>
        
    </div>

    {/* image  */}
    <div className='lady-image-container'>
        <img src={lady} className='w-[600px]' alt="" />
    </div>
 </div>
      </section>
    );
};

export default Discount;