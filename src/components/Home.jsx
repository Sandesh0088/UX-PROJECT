import { StarOutlined } from '@ant-design/icons';
import { ArrowRightOutlined } from '@ant-design/icons';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import Popup from './Popup';
 
export default function Home(){
    const [showPopup,setShowPopup] = useState(false);
    useEffect(()=>{
        if(showPopup){
            document.body.style.overflow='hidden';

        }
        else{
            document.body.style.overflow='unset';
        }
    },[showPopup]);
    const scrollToSection = (Home) => {
    document.getElementById(Home)?.scrollIntoView({ behavior: "smooth" });
  };
    return(
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden" id='Hero'>
            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-12 items-center relative">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 sm:px-3 py-2 bg-yellow-50 border border-yellow-500 mb-4 sm:mb-6 rounded-full">
                            <StarOutlined className='text-yellow-300' style={{color:'' }}/>
                            <span className='text-xs text-yellow-500'>
                                Your Personal Meal Planning Companion
                            </span>
                           
                        </div>
                         <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6'>
                            <span>Your </span>
                            <span>Meal Planning </span>
                                <span>Simplified</span>
                            </h1>
                            <p className='text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8'>Save time, reduce stress, and provide nutritious meals with our intelligent meal planning app designed specifically for caregivers.
                                </p>
                                <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3 mb-8 sm:mb-12'>
                                    <button className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg  font-semibold text-sm sm:text-base flex items-center gap-2 bg-sky-200 hover:bg-sky-300 hover:shadow-lg transition-all duration-300 text-white' onClick={()=>setShowPopup(true)}>
                                        <span>Download Now</span>
                                        <ArrowRightOutlined className='group-hover:translate-x-1 transition-transform duration-300' style={{fontSize:'20px' }}/>
                                        </button>
                                       
                                    <button className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg  font-semibold text-sm sm:text-base flex items-center gap-2 border border-sky-200 text-sky-200 hover:bg-sky-200 hover:text-white transition-all duration-300'>
                                       <span>Watch Demo</span>
                                       <PlayCircleOutlined className='group-hover:translate-x-1 transition-transform duration-300' style={{fontSize:'24px' }}/>
 
                                       </button>
                                </div>
                    </div>
 
                    {/* Bento Grid */}
                    <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[700px]">
            <div className="grid grid-cols-2 grid-rows-4 gap-4 w-full h-full">

              {/* Large image */}
              <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
                <img
                  src="./images/meal.jpg"
                  alt="Feed"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small left */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="./images/feed.jpg"
                  alt="feed"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small right */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="./images/hands.jpg"
                  alt="hands"
                  className="w-full h-full object-cover"
                />
              </div>

             

            </div>
          </div>

        </div>
               {showPopup && <Popup onClose={()=>setShowPopup(false)}/>}
            </div>
        </section>
        
    )
}
