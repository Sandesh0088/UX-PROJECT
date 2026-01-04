export default function Navbar(){
    return(
    <nav className="fixed top-0 w-full z-50 bg-blue-800/90 shadow-cyan-200 backdrop-blur-sm"> 
    <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 text-white">
        <div className="flex justify-between items-center h-14 sm:h-16">
        <div className="flex item-center space-x-1 ">
        <div>
            <img src="./images/icons8-logo-100.png" alt="logo" className="w-8 h-8 sm:wd-4 h-4"  />
        </div>
        <span className="text-lg sm:text-xl font-medium">
            <span>MEALBUDDY</span>
        </span>
        </div>
        {/* navigation link */}
        <div className="flex item-center space-x-6 lg:space-x-8 ">
            <a href="#Hero" onClick={() => scrollToSection('Home')} className="text-white hover:text-blue-500 text-sm lg:text-base">Home </a>
             <a href="#Aboutus" onClick={() => scrollToSection('Aboutus')} className="text-white hover:text-blue-500 text-sm lg:text-base"> About Us </a>
             <a href="#Features" onClick={() => scrollToSection('Features')} className="text-white hover:text-blue-500 text-sm lg:text-base"> Features </a>
        </div>
        <button className="md:hidden">
            <menu className=""></menu>
        </button>
        </div>
    </div>
    </nav>
    )
}