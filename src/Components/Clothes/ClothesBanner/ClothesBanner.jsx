import video from "../../../assets/clothesbannerVideo.mp4"

const ClothesBanner = () => {
 
  

    return (
        <section className="clothes-banner xl:mx-20">
         <video className="xl:h-[90vh] xl:w-full" src={video} autoPlay loop muted/>
            
        </section>
    );
};

export default ClothesBanner;