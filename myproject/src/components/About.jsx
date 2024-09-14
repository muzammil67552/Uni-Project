
const About = () => {
    return (
        <div className="max-w-[1240] mx-auto bg- bg-slate-200 -screen mt-20 ">
        <div className="md:text-5xl text-2xl pt-4 font-bold text-center ">
            <h1>About Us </h1>
        </div>

        <div className=" grid  lg:grid-cols-3 md:grid-cols-2 gap-7  p-20 overflow-hidden">
            <div className="font-semibold text-2xl text-center p-3 shadow-lg hover:scale-105 duration-500">
                <img src="./src/image/muzamil.jpg" className="h-96 w-80 "></img>
                <h1>Muhammad.Muzammil</h1>
                <p className="p-2">Department (BSCS) <br/>Front End Developer</p>
              <a href="https://www.facebook.com/Muzammil16070?mibextid=ZbWKwL" target="_jump">
                <button className="px-5 py-2 border-black bg-slate-600 text-white hover:bg-[#04040c] rounded ">Contact</button>
                </a>
            </div>
            <div className="font-semibold text-2xl text-center p-3 shadow-lg hover:scale-105 duration-500">
                <img src="./src/image/uzair.jpg" className="h-96 w-96"></img>
                <h1>Uzair Rehman</h1>
                <p className="p-2">Department (BSCS) <br/>Digital Marketing</p>
              <a href="https://www.facebook.com/share/SY6jNzXuYdnVjHvZ/?mibextid=qi2Omg" target="_jump">
               <button className="px-5 py-2 border-black bg-slate-600 text-white hover:bg-[#04040c] rounded ">Contact </button>
               </a>
            </div>
            <div className="font-semibold text-2xl text-center p-3 shadow-lg hover:scale-105 duration-500">
                <img src="./src/image/uzkhan.jpg" className="h-96 w-80 "></img>
                 <h1>Muhammad Uzair</h1>
                <p  className="p-2">Department (BSCS) <br/>WordPress Developer</p>
               <a href="" target="_jump">
                <button className="px-5 py-2 border-black bg-slate-600 text-white hover:bg-[#04040c] rounded ">Contact </button>
                </a>
            </div>
        </div>
        </div>
    );
};

export default About;