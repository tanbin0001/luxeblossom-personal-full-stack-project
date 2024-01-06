
import forever from '../../../assets/brands/forever.png'
import zara from '../../../assets/brands/zara.png'
import hm from '../../../assets/brands/hm.png'
import UrbanOutfitters from '../../../assets/brands/UrbanOutfitters.png'
import Topshop from '../../../assets/brands/Topshop.png'
import asos from '../../../assets/brands/asos.png'


import Marquee from "react-fast-marquee";
const OurBrands = () => {
    return (
        <div className='my-20'> 
            <div className='flex justify-center '>

            <h1 className='text-center rounded-md    marcellus h-10  w-64 text-white text-3xl bg-red-500  mx-auto my-10 '>Our Top Brands</h1>
            </div>
            <Marquee>
                <div className=" flex">
                    {/* image 1 */}

                    <div className=" ">
                        <img src={forever} className=" w-80" />
                    </div>
                    <div className=" ">
                        <img src={zara} className=" w-80" />
                    </div>
                    <div className=" ">
                        <img src={hm} className=" w-80" />
                    </div>
                    <div className=" ">
                        <img src={UrbanOutfitters} className=" w-80" />
                    </div>
                    <div className=" ">
                        <img src={Topshop} className=" w-80" />
                    </div>
                    <div className=" ">
                        <img src={asos} className=" w-80" />
                    </div>
                     
                </div>
            </Marquee>
        </div>
    );
};

export default OurBrands;