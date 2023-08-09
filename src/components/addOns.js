import { useState } from "react";
import Button from "./backAndNextButton";


const AddOns = ({stepThreeColor,isYearly, handleAddsSelection, selectedAdds, addsError, addsHandler, backToStepTwo}) =>{
    
    const addons = [
        {
            addsName : "Online Service",
            addsText : "Access to multiplay games",
            addsPrice: "+$1/mo",
            isMonthly: true,

        },
        {
            addsName : "Large Storage",
            addsText : "Extra 1TB of cloud save",
            addsPrice: "+$2/mo",
            isMonthly: true,

        },
        {
            addsName : "Customizable profile",
            addsText : "Custom theme on your profile",
            addsPrice: "+$2/mo",
            isMonthly: true,

        },
        {
            addsName : "Online Service",
            addsText : "Access to multiplay games",
            addsPrice: "+$10/yr",
            isMonthly: false,

        },
        {
            addsName : "Large Storage",
            addsText : "Extra 1TB of cloud save",
            addsPrice: "+$20/yr",
            isMonthly: false,

        },
        {
            addsName : "Customizable profile",
            addsText : "Custom theme on your profile",
            addsPrice: "+$20/yr",
            isMonthly: false,

        },
    ]
    const monthlyAddOns = addons.filter((adds) => adds.isMonthly);
    const yearlyAddOns = addons.filter((adds) => !adds.isMonthly);
    return(
        <div className={`${stepThreeColor?'block':'hidden'} sm:-mt-10 md:-mt-0 lg:-mt-10`}>
            <div className="sm:bg-white  sm:rounded-lg sm:mx-6 sm:p-6 lg:p-12">
                    <p className='text-blue-950 sm:text-2xl lg:text-4xl font-bold'>Pick add-ons</p>
                    <p className='text-gray-500 mt-2 text-sm'>Add-ons help enhance your gaming experience.</p>
                    
                    <div className={`flex flex-col sm:mt-8 md:mt-2 lg:mt-8 ${isYearly?'hidden':'block'}`}>
                      {monthlyAddOns.map((add)=>(
                           <div key={add.addsName}  onClick={()=>handleAddsSelection(add)} className={`flex cursor-pointer items-center sm:p-4 md:p-1 lg:p-4 border-2 rounded-lg  mt-4 ${selectedAdds.some(item => item.addsName === add.addsName && item.isMonthly === true) ? 'border-blue-500' : 'border-gray-300'} ${addsError?'border-red-400':''}`}>
                           <input className="ml-1" id="ads-check" checked={selectedAdds.some(item => item.addsName === add.addsName && item.isMonthly === true)?'checked':''} onChange={() => {}} type="checkbox"/>
                           <div className="flex flex-col sm:pl-6 md:pl-2 lg:pl-6  w-full">
                               <p className="text-blue-950  font-bold">{add.addsName}</p>
                               <p className="sm:text-xs lg:text-sm text-gray-500">{add.addsText}</p>
                           </div>
                           <p className="lg:ml-20 text-blue-800 ">{add.addsPrice}</p>
                       </div>
                      ))}  
                    </div>
                    <div className={`flex flex-col sm:mt-8 md:mt-2 lg:mt-8 ${isYearly?'block':'hidden'}`}>
                      {yearlyAddOns.map((add)=>(
                           <div key={add.addsName}  onClick={()=>handleAddsSelection(add)} className={`flex cursor-pointer items-center sm:p-4 md:p-1 lg:p-4 border-2 rounded-lg  mt-4  ${selectedAdds.some(item => item.addsName === add.addsName && item.isMonthly === false) ? 'border-blue-500' : 'border-gray-300'} ${addsError?'border-red-400':''}`}>
                           <input className="lg:ml-1" id="ads-check" checked={selectedAdds.some(item => item.addsName === add.addsName && item.isMonthly === false)?'checked':''} onChange={() => {}} type="checkbox"/>
                           <div className="flex flex-col sm:pl-6 md:pl-2 lg:pl-6  w-full">
                               <p className="text-blue-950 font-bold">{add.addsName}</p>
                               <p className="sm:text-xs lg:text-sm text-gray-500">{add.addsText}</p>
                           </div>
                           <p className="lg:ml-20 text-blue-800 ">{add.addsPrice}</p>
                       </div>
                      ))}  
                    </div>

                    </div>

                    

                    <Button back={backToStepTwo} next={addsHandler} />
                   
                   
                    
                </div>
    )
}

export default AddOns;