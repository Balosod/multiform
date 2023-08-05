import { useState } from "react";


const AddOns = ({stepThreeColor,isYearly}) =>{
    const [isChecked, setIsChecked] = useState(false);



    const checkHandler = () =>{
        setIsChecked(!isChecked)
    }

    const addons = [
        {
            addsName : "Online Service",
            addsText : "Access to multiplay games",
            addsPrice: "+1$/mo",
            isMonthly: true,

        },
        {
            addsName : "Large Storage",
            addsText : "Extra 1TB of cloud save",
            addsPrice: "+2$/mo",
            isMonthly: true,

        },
        {
            addsName : "Customizable profile",
            addsText : "Custom theme on your profile",
            addsPrice: "+2$/mo",
            isMonthly: true,

        },
        {
            addsName : "Online Service",
            addsText : "Access to multiplay games",
            addsPrice: "+10$/mo",
            isMonthly: false,

        },
        {
            addsName : "Large Storage",
            addsText : "Extra 1TB of cloud save",
            addsPrice: "+20$/mo",
            isMonthly: false,

        },
        {
            addsName : "Customizable profile",
            addsText : "Custom theme on your profile",
            addsPrice: "+20$/mo",
            isMonthly: false,

        },
    ]
    const monthlyAddOns = addons.filter((adds) => adds.isMonthly);
    const yearlyAddOns = addons.filter((adds) => !adds.isMonthly);
    return(
        <div className={`${stepThreeColor?'block':'hidden'}`}>
                    <p className='text-blue-950 text-4xl mt-10 font-bold'>Pick add-ons</p>
                    <p className='text-gray-500 mt-2 text-sm'>Add-ons help enhance your gaming experience.</p>
                    
                    <div className={`flex flex-col mt-8 ${isYearly?'hidden':'block'}`}>
                      {monthlyAddOns.map((add)=>(
                           <div onClick={checkHandler} className=" flex cursor-pointer items-center p-4 border-2 rounded-md  mt-4">
                           <input className="ml-1" id="ads-check" checked={`${isChecked?"checked":''}`}  type="checkbox"/>
                           <div className="flex flex-col pl-6  w-full">
                               <p className="text-blue-950 font-bold">{add.addsName}</p>
                               <p className="text-sm">{add.addsText}</p>
                           </div>
                           <p className="ml-20 text-blue-800 ">{add.addsPrice}</p>
                       </div>
                      ))}  
                    </div>
                    <div className={`flex flex-col mt-8 ${isYearly?'block':'hidden'}`}>
                      {yearlyAddOns.map((add)=>(
                           <div onClick={checkHandler} className=" flex cursor-pointer items-center p-4 border-2 rounded-md  mt-4">
                           <input className="ml-1" id="ads-check" checked={`${isChecked?"checked":''}`}  type="checkbox"/>
                           <div className="flex flex-col pl-6  w-full">
                               <p className="text-blue-950 font-bold">{add.addsName}</p>
                               <p className="text-sm">{add.addsText}</p>
                           </div>
                           <p className="ml-20 text-blue-800 ">{add.addsPrice}</p>
                       </div>
                      ))}  
                    </div>

                    <div className='flex flex-col '>
                        <div className="flex flex-row justify-between">
                        <button  className='place-self-start bg-white mb-4 mt-20 text-gray-500 font-bold rounded-md'>Go back</button>
                        <button  className='place-self-end bg-blue-900 mb-4 w-1/4 px-2 py-3 mt-20 text-white rounded-md'>Next Step</button>
                        </div>
                        
                    </div> 
                   
                    
                </div>
    )
}

export default AddOns;