import { useState } from "react";
import arcade from '../icon-arcade.svg'
import advanced from '../icon-advanced.svg'
import pro from '../icon-pro.svg'
import Button from "./backAndNextButton";



const SelectPlan = ({stepTwoColor,backToStepOne, selectedPlan,handlePlanSelection, handleToggleChange, isYearly, planHandler, planError}) =>{

    const plans = [
        {
          name: 'Arcade',
          priceMonthly: '$9/mo',
          isMonthly: true,
          imageUrl: arcade,
        },
        {
          name: 'Advanced',
          priceMonthly: '$12/mo',
          isMonthly: true,
          imageUrl: advanced,
        },
        {
          name: 'Pro',
          priceMonthly: '$15/mo',
          isMonthly: true,
          imageUrl: pro,
        },

        {
            name: 'Arcade',
            isMonthly: false,
            priceYearly: '$90/yr',
            imageUrl: arcade,
            freeYearPlan:"2 months free"
          },
          {
            name: 'Advanced',
            isMonthly: false,
            priceYearly: '$120/yr',
            imageUrl: advanced,
            freeYearPlan:"2 months free"
          },
          {
            name: 'Pro',
            isMonthly: false,
            priceYearly: '$150/yr',
            imageUrl: pro,
            freeYearPlan:"2 months free"
          }
      ];

    const monthlyPlans = plans.filter((plan) => plan.isMonthly);
    const yearlyPlans = plans.filter((plan) => !plan.isMonthly);
    

    

    return (
        <div className={`${stepTwoColor?'block':'hidden'} sm:-mt-10 md:-mt-0 lg:-mt-10`}>
             <div className="sm:bg-white  sm:rounded-lg sm:mx-6 sm:p-6 lg:p-12 ">
                    <p className='text-blue-950 sm:text-2xl lg:text-4xl  font-bold'>Select your plan</p>
                    <p className='text-gray-500 lg:mt-2 lg:mb-10 sm:text-sm md:text-xs lg:text-sm'>You have the option of monthly and yearly billing</p>

                    {/* {planError && (<p className='text-red-500 mt-6 text-sm text-center'>Please Select A Plan</p>)} */}
                        
                     <div className={`flex sm:flex-col md:flex-row lg:flex-row md:space-x-2 lg:space-x-4 lg:mt-10  ${isYearly?'hidden':'block'}`}>
                     {(monthlyPlans).map((plan)=>(
                        
                         <div key={plan.name}  className={`border-2 cursor-pointer rounded-lg bg-white sm:w-full sm:mt-4 lg:mt-0 md:w-1/3 lg:w-1/3 sm:p-4 md:p-2 lg:p-4 ${selectedPlan.name === plan.name && selectedPlan.isYearly === false?'border-blue-500':'border-gray-300'} ${planError?'border-red-400':''}`} onClick={() => handlePlanSelection(plan)}>
                         <div className="flex sm:flex-row md:flex-col lg:flex-col">
                             <img
                                 className=""
                                 src={plan.imageUrl}
                                 alt="arcade"
                                 width={40}
                                 height={40}
                                 />
                            <div className="flex sm:ml-4 md:ml-0 lg:ml-0 sm:flex-col lg:flex-col">
                            <p className="text-blue-950 text-left sm:text-sm md:text-xs lg:text-sm font-bold md:mt-4 lg:mt-10">{plan.name}</p>
                            <p className="text-gray-500 text-left sm:text-sm md:text-xs lg:text-sm sm:mt-1 md:mt-2 lg:mt-2">{isYearly?plan.priceYearly:plan.priceMonthly}</p>
                            </div>
                             
                             
                             <p className="text-blue-950 text-left text-sm lg:mt-1">{isYearly?plan.freeYearPlan:''}</p>
                         </div>
                                 
                         </div>
                     ))}
                    </div>   

                    <div className={`flex sm:flex-col md:flex-row lg:flex-row md:space-x-2 lg:space-x-4 lg:mt-10 ${isYearly?'block':'hidden'}`}>
                     {(yearlyPlans).map((plan)=>(
                        
                        <div key={plan.name}  className={`border-2 cursor-pointer rounded-md bg-white sm:w-full sm:mt-4 lg:mt-0 md:w-1/3 lg:w-1/3 sm:p-4 md:p-2 lg:p-4 ${selectedPlan.name === plan.name && selectedPlan.isYearly === true?'border-blue-500':'border-gray-300'} ${planError?'border-red-400':''}`} onClick={() => handlePlanSelection(plan)}>
                        <div className="flex sm:flex-row md:flex-col lg:flex-col">
                            <img
                                className=""
                                src={plan.imageUrl}
                                alt="arcade"
                                width={40}
                                height={40}
                                />
                           <div className="flex sm:ml-4 md:ml-0 lg:ml-0 sm:flex-col lg:flex-col">
                           <p className="text-blue-950 text-left sm:text-sm md:text-xs lg:text-sm font-bold  md:mt-4 lg:mt-10">{plan.name}</p>
                           <p className="text-gray-500 text-left sm:text-sm md:text-xs lg:text-sm m:mt-1 md:mt-2 lg:mt-2">{isYearly?plan.priceYearly:plan.priceMonthly}</p>
                           <p className="text-blue-950 text-left sm:text-sm md:text-xs lg:text-sm text-sm md:mt-2 lg:mt-1">{isYearly?plan.freeYearPlan:''}</p>
                           </div>
                            
                            
                            
                        </div>
                                
                        </div>
                     ))}
                    </div>    
                    


                    <div  className={`flex justify-center md:mt-10 sm:mt-4 lg:mt-10 space-x-4 ${isYearly?'hidden':'block'}`}>
                        <div className="text-blue-950 font-bold">Monthly</div>
                        <div onClick={handleToggleChange} className="rounded-full bg-blue-950  pl-1 py-1"
                        style={{
                            width:"43px"
                        }}>
                            <div className="rounded-full bg-white p-2 w-0  place-self-start"></div>
                        </div>
                        <div className="text-gray-500 font-bold">Yearly</div>
                     </div>

                     <div  className={`flex justify-center sm:mt-4 md:mt-10 lg:mt-10 space-x-4 ${isYearly?'block':'hidden'}`}>
                     <div className="text-gray-500 font-bold">Monthly</div>
                        <div onClick={handleToggleChange} className="rounded-full bg-blue-950 pl-6  py-1"
                        style={{
                            width:"43px"
                        }}>
                            <div className="rounded-full bg-white p-2 w-0  place-self-center"></div>
                        </div>
                        <div className="text-blue-950  font-bold">Yearly</div>
                        </div>
                     

                </div>  
                   

                    <div className='flex flex-col sm:bg-red-200   lg:p-0 sm:mt-10 lg:mt-0 sm:full lg:w-full'>
                        <div className="flex flex-row justify-between sm:mx-4 md:mx-12 lg:mx-20">
                        <button onClick={backToStepOne} className='md:text-sm lg:text-sm place-self-start bg-white mb-4 sm:mt-8 md:mt-6 lg:mt-20 text-gray-500 font-bold rounded-md'>Go back</button>
                        <button onClick={planHandler} className='md:text-sm lg:text-sm place-self-end bg-blue-900 mb-4 sm:w-2/5 md:w-2/5 lg:w-1/4 sm:px-2 md:px-0 lg:px-2 py-3 sm:mt-4 lg:mt-20 text-white rounded-lg'>Next Step</button>
                        </div>
                        
                    </div> 
                    {/* <Button back={backToStepOne} next={planHandler} /> */}
                   
                </div>
    )
}

export default SelectPlan;