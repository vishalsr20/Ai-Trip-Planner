import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const location = [
  'India Gate, Delhi',
  'Gateway of India, Mumbai',
  'Lalbagh Botanical Garden, Bangalore',
  'Marina Beach, Chennai',
  'Victoria Memorial, Kolkata',
  'Charminar, Hyderabad',
  'Hawa Mahal, Jaipur',
  'Taj Mahal, Agra',
  'Ghats of Varanasi, Varanasi',
  'Sabarmati Ashram, Ahmedabad',
  'Shaniwar Wada, Pune',
  'City Palace, Udaipur',
  'Jaisalmer Fort, Jaisalmer',
  'Baga Beach, Goa',
  'Fort Kochi, Kochi',
  'Mysore Palace, Mysore',
  'Laxman Jhula, Rishikesh',
  'Tiger Hill, Darjeeling',
  'Khajuraho Temples, Khajuraho',
  'Pangong Lake, Leh',
  'Sula Vineyards, Nashik',
  
    "India Gate, Delhi",
    "Gateway of India, Mumbai",
    "Lalbagh Botanical Garden, Bangalore",
    "Marina Beach, Chennai",
    "Victoria Memorial, Kolkata",
    "Charminar, Hyderabad",
    "Hawa Mahal, Jaipur",
    "Taj Mahal, Agra",
    "Ghats of Varanasi, Varanasi",
    "Sabarmati Ashram, Ahmedabad",
    "Shaniwar Wada, Pune",
    "City Palace, Udaipur",
    "Jaisalmer Fort, Jaisalmer",
    "Baga Beach, Goa",
    "Fort Kochi, Kochi",
    "Mysore Palace, Mysore",
    "Laxman Jhula, Rishikesh",
    "Tiger Hill, Darjeeling",
    "Khajuraho Temples, Khajuraho",
    "Pangong Lake, Leh",
    "Sula Vineyards, Nashik"
  

];
function Slider() {
    const navigate = useNavigate();
  const [images , setImages] = useState([])
 
  const [loader, setLoader] = useState(true);

  useEffect( () => {
    const fetchImages = async () => {
      const randomLocation = location[Math.floor(Math.random() * location.length)]
      try{
        const response = await axios.get("https://api.unsplash.com/search/photos",{
          params:{
            query:randomLocation,
            per_page:5
          },
          headers:{
            Authorization:`Client-ID kNG5fYXoB3MrHWdmIvSKMzizhsOUFhCIUt8IGIfUwKw`
          }
        })
        setImages(response.data.results)
        
        setLoader(false)
        
      }
      catch(error){
        console.log("Error in fetchong the images")
        setLoader(false)
      }
    }
    fetchImages();
    
  },[])

  function ChangePath(){
    navigate('/animal')
  }
return (
  <>
    <div>
    { loader ? (
      <div> Loading ...</div>
    ) : (
      <div className="bg-slate-900 h-screen w-screen">
 <div className="flex pl-64 text-6xl  font-bold text-slate-700 capitalize">
      Plan your journey with junkies
    </div>

    {/* Step 4: Map through fetched images */}
    <div className=" w-[720px] h-[320px] flex mx-auto mt-8 ">
    <Carousel
      className="  mx-auto rounded-lg"
      transitionTime={500}
      autoPlay={true}
      autoFocus={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
    >
      {images.map((image, index) => (
        <div key={index} className=" relative w-[720px] h-[420px] ">
          <img className=" w-full rounded-md h-full object-cover" src={image.urls.regular}  />
         <div className="bg-red-700 z-10">
         <h2 className="text-slate-800 font-bold capitalize text-2xl text-center absolute bottom-4 left-0 right-0 z-30">{image.alt_description || 'Unknown Location'}</h2>
         </div>
        </div>
      ))}
    </Carousel>
    </div>
   
 </div>
 
    )}
    </div>
    {/* <div className="w-full py-2 rounded-lg ho bg-green-600">
        <button className=" h-5" onClick={ChangePath}>
            Click here to search Animals
        </button>
    </div> */}
  </> 
);
}

export default Slider
