
function Sidebar() {
    return (
        <div>
            <div className="flex flex-col p-10 lg:hidden">
                <a href="https://navinpinkman.vercel.app/" className="relative group mt-5">
                    ABOUT US
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#gallery" className="relative group mt-5">
                    GALLERY
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="https://x.com/home" className="relative group mt-5">
                    Twitter
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="https://climate.nasa.gov/earth-now/" className="relative group mt-5">
                    climate
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
