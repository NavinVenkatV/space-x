import Footer from "../components/footer";
import Gallery from "../components/gallery";

function Index() {
    return (
        <div className="overflow-hidden">
            <div className="relative w-screen h-screen overflow-hidden text-white bebas-neue">
                {/* Video Background */}
                <video
                    src="/spaceX.mp4" // Ensure this path is correct
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                <div className="relative z-10 mx-5 lg:mx-20 my-10">
                    {/* Header Section */}
                    <div className="lg:flex justify-between items-center sticky">
                        <div>
                            <h1 className="text-center font-bold text-4xl lg:text-5xl tracking-widest items-center justify-center text-white cursor-pointer">
                                SPACE X <i className="text-sm">beta</i>
                            </h1>
                        </div>
                        <div className="tracking-wide text-xl lg:text-2xl items-center justify-center cursor-pointer hidden lg:flex space-x-6">
                            <a href="https://navinpinkman.vercel.app/" className="m-3 relative group">
                                ABOUT US
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#gallery" className="m-3 relative group ">
                                GALLERY
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="https://x.com/home" className="m-3 relative group">
                                Twitter
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="https://climate.nasa.gov/earth-now/" className="m-3 relative group">
                                climate
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>
                        <a href="https://shop.spacex.com/" className="text-xl lg:text-2xl relative group items-center justify-center hidden lg:flex">
                            shop
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    {/* Main Section */}
                    <div className="flex flex-col justify-center h-screen text-white space-y-4">
                        <div className="text-3xl lg:text-4xl tracking-wide">
                            Join the Revolution in Space Exploration
                        </div>
                        <p className="text-lg lg:text-xl">
                            Space exploration is not just for astronauts and scientists—it's a movement for everyone.
                        </p>
                        <a href="https://www.spacex.com/">
                            <button className="mt-6 px-10 py-2 border-2 border-white text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                                navin Venkat
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="gallery">
                <Gallery label={"Elon Musk views Mars as a crucial step in humanity's future, believing that establishing a self-sustaining colony on the Red Planet is essential for ensuring the survival of the human species. He envisions Mars not only as a new frontier for exploration but as a way to push the boundaries of human knowledge and capabilities. Musk has famously stated, 'I want to die on Mars. Just not on impact,'' reflecting his commitment to this ambitious goal. He believes that making life multi-planetary will inspire future generations, showing that humanity can achieve the impossible and build a better future, both on Earth and beyond"}
                    image="el.jpg" butlabel={"SPACE X"} />
                <Gallery label="Jeff Bezos, the founder of Amazon and Blue Origin, envisions a future where humanity expands beyond Earth to enable growth and innovation while preserving the planet's natural beauty. He founded Blue Origin in 2000 with the goal of reducing the cost of space travel and making it accessible to more people."
                    image="Screenshot 2024-12-15 165314.png" butlabel={"BLUE ORIGIN"} />
                <Gallery label={"The National Aeronautics and Space Administration (NASA) is the United States' government agency responsible for exploring space and conducting scientific research related to aeronautics and astronomy. Established in 1958, NASA has played a pivotal role in advancing humanity's understanding of the universe, fostering innovation, and inspiring generations."}
                    image="image.png" butlabel="NASA" />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Index;
