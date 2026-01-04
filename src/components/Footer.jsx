import { FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';
import { InstagramFilled } from '@ant-design/icons';
export default function Footer() {
  return (
    <footer className="bg-blue-800 py-8">
      <div className="max-w-7xl mx-auto  w-full gap-10 grid grid-cols-1 md: grid-cols-3 items-">
        
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">About us</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Odit excepturi vitae accusamus unde neque animi sit vel.
          </p>
        </div>

        <div>
           <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="list-none space-y-2">
            <li><a href="/" className="text-white hover:underline">Home</a></li>
            <li><a href="/about" className="text-white hover:underline">About us</a></li>
            <li><a href="/contact" className="text-white hover:underline">Contact Us</a></li>
            <li><a href="/features" className="text-white hover:underline">Features</a></li>
          </ul>
        </div>
    <div>
        <div>
             <h2 className="text-white text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h2>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 h-10 px-4 rounded-md text-gray-700 focus:outline-none bg-white"
            />
            <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-md transition">
              Subscribe
            </button>
            </div>
        </div>
        <h2 className="text-white text-xl font-semibold mb-4">Follow Us:</h2>
         <ul className="list-none flex space-x-2 ">
            <li> <FacebookFilled  className='px-2' style={{fontSize:'24px',color: '#FFF' }}/>< a href="/" className="text-white hover:underline">Facebook</a></li>
            <li> <InstagramFilled  className='px-2' style={{fontSize:'24px',color: '#FFF' }}/><a href="/about" className="text-white hover:underline">About us</a></li>
            <li><TwitterCircleFilled  className='px-2' style={{fontSize:'24px',color: '#FFF' }}/><a href="/contact" className="text-white hover:underline">Twitter</a></li>
          </ul>
    </div>
   
      </div>
       <div className='border-t-2 border-white  w-full text-center mt-4'>
        <p className='text-white mt-4'>© Copyright 2026 Sandesh Darlami Magar (25173632)</p>
    </div>
    </footer>
  );
}
