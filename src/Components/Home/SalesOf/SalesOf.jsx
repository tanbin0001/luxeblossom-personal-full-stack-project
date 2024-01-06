import { Button } from 'keep-react';
import './SalesOf.css'
import salesofmodel from '../../../assets/salesof/salesof model.png'
import salesofmodel2 from '../../../assets/salesof/salesofmodel2.png'


const SalesOf = () => {
    return (
        <section className='flex justify-center mb-10 '>

            <div className="salesOf-section      ">
                <div className='flex justify-around w-full h-full items-center '>
                    {/* card-1  */}
                    <div className='bg-white p-3 w-[600px]'>
                        <div className='flex justify-center items-center bg-blue-200 p-2'>
                            <div className='space-y-7 '>
                                <h1 className='text-4xl marcellus font-bold'>Hot Branch</h1>
                                <p className='satisfy text-2xl '>New Brand Fashion on this Summer.
                                    Sale off up to 35%</p>
                                <Button>Shop Now</Button>
                            </div>
                            <div>
                                <img src={salesofmodel} className='w- border-[5px] border-white  ' alt="" />
                            </div>
                        </div>
                    </div>
                    {/* card-2  */}
                    <div className='bg-white p-3 w-[600px]'>
                        <div className='flex justify-center items-center bg-purple-200  p-2'>
                            <div className='space-y-7 '>
                                <h1 className='text-4xl marcellus font-bold'>Hot Branch</h1>
                                <p className='satisfy text-2xl '>New Brand Fashion on this Summer.
                                    Sale off up to 35%</p>
                                <Button>Shop Now</Button>
                            </div>
                            <div>
                                <img src={salesofmodel2} className='w- border-[5px] border-white  ' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalesOf;