
import { ArrowRightOutlined } from '@ant-design/icons';

export default function Features() {
  const scrollToSection = (Features) => {
    document.getElementById(Features)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id='Features' className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-left relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-12 items-center relative">
          
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6">
              <span>Get In Touch </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
              Whether you have an inquiry, need assistance, or want to learn more about our services, our team is here to help.
            </p>
        
          </div>
        <div  className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h1 className="text-Black-600 font-manrope text-4xl font-semibold leading-10 mb-11">Send Us a Message</h1>
            <input type="text" placeholder="Name" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10"/>
            <input type="Email" placeholder="Email" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10"/>
            <input type="Number" placeholder="Phone" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10"/>
       <textarea name="Messsage" id="" className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8" placeholder="Message"></textarea>
       <button className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg  font-semibold text-sm sm:text-base flex items-center gap-2 bg-sky-200 hover:bg-sky-300 hover:shadow-lg transition-all duration-300 text-white'>
                                        <span>Submit</span>
                                        <ArrowRightOutlined className='group-hover:translate-x-1 transition-transform duration-300' style={{fontSize:'20px' }}/>
                                        </button>
        </div>
        </div>
      </div>
    </section>
  );
}
