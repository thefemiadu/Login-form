import { IoPerson } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
const App = () => {

const[action,setAction] = useState('Sign Up')

  return (
    <div className="bg-banner-image bg-cover h-[100vh]">
       <div className="flex items-center justify-center h-full">
          <div className="lg:w-[450px] bg-white  py-20 px-10 rounded-bl-[40px] rounded-se-[40px] ">
            <h1 className="text-4xl text-green-600 text-center mb-6 transition-all">{action}</h1>
            <div className="w-full ">
              {
                action === 'Login' ? <div className="transition-all"></div> : <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded transition-all">
                <IoPerson className="text-gray-700 text-xl"/>
                <input type = "text" className="bg-transparent border-none outline-none" placeholder="Your name"/>
              </div>
              }
               </div>
               <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
                <AiTwotoneMail className="text-gray-700 text-xl"/>
                <input type="email" className="bg-transparent border-none outline-none" placeholder="Your Email"/>
               </div>
               <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
                 <RiLockPasswordLine  className="text-gray-700 text-xl"/>
                <input type="password" className="bg-transparent border-none outline-none" placeholder="Your Password"/>
               </div>

                {
                action === 'Login' ? <div className="py-1 "> <p>Forgot Password? <span className="text-green-600"><a href = "">Click here</a></span></p></div> : <div></div>
                }
               
                <div className="flex justify-center gap-10 mt-10">
                 <button className={` text-white py-2 w-36 rounded-3xl ${action === 'Sign Up' ? 'bg-green-600' : 'bg-blue-300' }`} onClick = {() => setAction('Sign Up')}>Sign up</button>
                 <button className={` text-white py-2 w-36 rounded-3xl ${action === 'Login' ? 'bg-green-600' : 'bg-blue-300'}`} onClick = {() => setAction('Login')}>Login</button>
                </div>
              
            </div>
          </div>
       </div>
    
  )
}

export default App;
