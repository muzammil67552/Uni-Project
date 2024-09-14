// React-typed Npm Install wscube tech  and follow the Example
// md:text-3xl   md ur is k upper 
// text-xl means remaining will be this size

import { ReactTyped } from "react-typed"


const Home = () => {
    return (
        
            <div className="bg-gray-900 w-full py-[100px]">
             <div className="max-w-[1240] mx-auto text-center text-white font-bold p-8">
              <div className="text-xl md:text-3xl mt-5 ">
                Grow With Us 
              </div>
              <div className="text-[35px] md:text-[60px] mt-5 ">
               Learn With Us
              </div>
              
              <div className="text-[20px] md:text-[40px] mt-5 cursor-pointer  ">    
                   Learn
                   <ReactTyped className="pl-5"
                   strings={["Web Development ", "SEO ","Digital Marketing", "And More Skills"]}
                   typeSpeed={80}
                   loop={true}
                   backSpeed={50}
                   />
                   </div>

              
             </div>
            </div>
    
    );
};

export default Home;
