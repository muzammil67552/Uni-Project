// React-typed Npm Install wscube tech  and follow the Example
// md:text-3xl   md ur is k upper 
// text-xl means remaining will be this size
// java backend from Tapa Technicals 

import { ReactTyped } from "react-typed"
import React, {useState} from "react";
const Interest = () => {
   
    const [userRegistration, setUserRegistration] = useState({
         name:"",
         phone:"",
         email:"",

        
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
      
         setUserRegistration({...userRegistration.name = value  });
        
    }

    const submitHandle = (e) =>{
        e.preventDefault();

        const newRecord = {...userRegistration. id= new Date().getTime().toString}
        console.log(setRecords)
        setRecords([...records, newRecord])
        
    }

    return (
        
        <>
        
        <div className= "max-w-[1240] mx-auto bg-gray-900 w-full py-[100px] ">
            <div className="max-w-[1240] mx-auto   md:flex  justify-between px-20">
                <div className=" h-300px  mt-5 p-5 ">
                    <h1 className="text-3xl   font-bold text-white ">Want
                    <ReactTyped className="pl-5"
                   strings={["to Learn New Top IT Skills"]}
                   typeSpeed={80}
                   loop={true}
                   backSpeed={50}
                   />
                    </h1>
                    <span className="font-sans text-white md:text-xl  ">
                     Connect us to our news Letter and Contact Us and Grow Your Future
                    </span>
                    </div>
                    
                    <form action="" onSubmit={submitHandle}>
                     <div className=" h-300px   ">
                    <div className="p-2">
                    <input type="text"
                    name=" name"  id="Name" placeholder ="Your Full Name"
                    value={userRegistration.name}
                    onChange={handleInput}
                     className=" py-3 w-full px-5 "></input>
                    </div>

                    <div className="p-2">
                    <input type="text"
                    name=" phone" id="Phone" placeholder ="Phone Number"
                    value={userRegistration.phone}
                    onChange={handleInput}
                      className=" py-3 w-full px-5"></input>
                    </div>

                    <div className="p-2">
                    <input type="text"
                    name=" email" id="Email" placeholder ="Email"
                    value={userRegistration.email}
                    onChange={handleInput}
                     className=" py-3 w-full px-5"></input>
                    </div>

                    <div className=" md:flex-none">
                    <button className="py-3  w-full md:w-full  mt-5 border border-black bg-slate-600 text-white hover:bg-[#04040c] rounded ">Registered Now</button>
                    </div>
                    <p className="font-sans text-[#94a3b8] text-xl mt-2 ">Still We Are Here To Protect  Your Policy </p>
                </div>
              
                </form>
            </div>
            
        </div>
        
      </>
    );
};

export default Interest;