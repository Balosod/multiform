import { useState } from "react";
import arcade from '../icon-arcade.svg'
import advanced from '../icon-advanced.svg'
import pro from '../icon-pro.svg'



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
        <div className={`${stepTwoColor?'block':'hidden'}`}>
                    <p className='text-blue-950 text-4xl mt-10 font-bold'>Select your plan</p>
                    <p className='text-gray-500 mt-4 text-sm'>You have the option of monthly and yearly billing</p>

                    {/* {planError && (<p className='text-red-500 mt-6 text-sm text-center'>Please Select A Plan</p>)} */}
                        
                     <div className={`flex flex-row space-x-4 mt-10 ${isYearly?'hidden':'block'}`}>
                     {(monthlyPlans).map((plan)=>(
                        
                         <div key={plan.name}  className={`border-2 cursor-pointer rounded-md bg-white w-1/3 p-4 ${selectedPlan.name === plan.name && selectedPlan.isYearly === false?'border-blue-500':'border-gray-300'} ${planError?'border-red-400':''}`} onClick={() => handlePlanSelection(plan)}>
                         <div>
                             <img
                                 className=""
                                 src={plan.imageUrl}
                                 alt="arcade"
                                 width={40}
                                 height={40}
                                 />
                             <p className="text-blue-950 text-left font-bold mt-10">{plan.name}</p>
                             <p className="text-gray-500 text-left mt-2">{isYearly?plan.priceYearly:plan.priceMonthly}</p>
                             <p className="text-blue-950 text-left text-sm mt-1">{isYearly?plan.freeYearPlan:''}</p>
                         </div>
                                 
                         </div>
                     ))}
                    </div>   

                    <div className={`flex flex-row space-x-4 mt-10 ${isYearly?'block':'hidden'}`}>
                     {(yearlyPlans).map((plan)=>(
                        
                         <div key={plan.name}  className={`border-2 cursor-pointer rounded-md bg-white w-1/3 p-4 ${selectedPlan.name === plan.name && selectedPlan.isYearly === true?'border-blue-500':'border-gray-300'} ${planError?'border-red-400':''}`} onClick={() => handlePlanSelection(plan)}>
                         <div>
                             <img
                                 className=""
                                 src={plan.imageUrl}
                                 alt="arcade"
                                 width={40}
                                 height={40}
                                 />
                             <p className="text-blue-950 text-left font-bold mt-10">{plan.name}</p>
                             <p className="text-gray-500 text-left mt-2">{isYearly?plan.priceYearly:plan.priceMonthly}</p>
                             <p className="text-blue-950 text-left text-sm mt-1">{isYearly?plan.freeYearPlan:''}</p>
                         </div>
                                 
                         </div>
                     ))}
                    </div>    
                    


                    <div  className={`flex justify-center mt-10 space-x-4 ${isYearly?'hidden':'block'}`}>
                        <div className="text-blue-950 font-bold">Monthly</div>
                        <div onClick={handleToggleChange} className="rounded-full bg-blue-950  pl-1 py-1"
                        style={{
                            width:"43px"
                        }}>
                            <div className="rounded-full bg-white p-2 w-0  place-self-start"></div>
                        </div>
                        <div className="text-gray-500 font-bold">Yearly</div>
                     </div>

                     <div  className={`flex justify-center mt-10 space-x-4 ${isYearly?'block':'hidden'}`}>
                     <div className="text-gray-500 font-bold">Monthly</div>
                        <div onClick={handleToggleChange} className="rounded-full bg-blue-950 pl-6  py-1"
                        style={{
                            width:"43px"
                        }}>
                            <div className="rounded-full bg-white p-2 w-0  place-self-center"></div>
                        </div>
                        <div className="text-blue-950  font-bold">Yearly</div>
                        </div>
                     

                    
                   

                    <div className='flex flex-col mt-8'>
                        <div className="flex flex-row justify-between">
                        <button onClick={backToStepOne} className='place-self-start bg-white mb-4 mt-20 text-gray-500 font-bold rounded-md'>Go back</button>
                        <button onClick={planHandler} className='place-self-end bg-blue-900 mb-4 w-1/4 px-2 py-3 mt-20 text-white rounded-md'>Next Step</button>
                        </div>
                        
                    </div> 
                </div>
    )
}

export default SelectPlan;