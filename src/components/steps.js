// import bgSide from '../bg-sidebar-desktop.svg';
// import bgmobile from '../bg-sidebar-mobile.svg'


const Step = ({stepOneColor,stepTwoColor,stepThreeColor, stepFourColor}) =>{

    const steps = [
        {
            stage:stepOneColor,
            name: 'STEP 1',
            figure:'1',
            content: 'YOUR INFO'
        },
        {
            stage:stepTwoColor,
            name: 'STEP 2',
            figure:'2',
            content: 'SELECT PLAN'
        },
        {
            stage:stepThreeColor,
            name: 'STEP 3',
            figure:'3',
            content: 'ADD-ONS'
        },
        {
            stage:stepFourColor,
            name: 'STEP 4',
            figure:'4',
            content: 'SUMMARY'
        }
    ]

    return(
        
        <div className="sm:bg-mobile md:bg-desktop md:rounded-md lg:bg-desktop lg:rounded-md bg-no-repeat bg-cover sm:w-full md:w-2/4 lg:w-2/4 "
       
        >
            <div className="flex sm:flex-row md:flex-col  lg:flex-col  justify-center  lg:ml-0 sm:mt-6 sm:mb-16 sm:mt-6 ">
            {steps.map((step)=>(
                
                <div key={step.name} className='flex flex-row  space-x-4 sm:pl-4 sm:pb-4 md:pb-0 md:pl-4 md:pr-6 lg:pr-0 md:pt-1 lg:pb-0 lg:pl-8 lg:pt-6'>
                    <div className={`flex rounded-full mt-3 border-2 w-8 h-8 border-gray-400 mt-2 ${step.stage?'bg-teal-300':''}`}>
                        <div className={`mx-auto my-auto ${step.stage?'':'text-white'}`} >
                            {step.figure}
                        </div>
                    </div>
                    <div className=' sm:hidden md:block lg:block flex flex-col '>
                       <p className='text-gray-400'>{step.name}</p>
                       <p className='text-white'>{step.content}</p>
                    </div>
                  
                </div>
           
            ))}
            </div>
        </div>
        
        
    )
}

export default Step;


{/* <div className="rounded-md w-full p-10  sm:block md:hidden"
        // style={{
        //     backgroundImage: `url(${bgmobile})`,
        //     backgroundRepeat: 'no-repeat',
        // }}
        // > <div className='flex flex-row space-x-2 justify-center sm:mb-20'>
        //     {steps.map((step)=>(
                
        //         <div key={step.name} className=''>
        //             <div className={`flex rounded-full mt-3 border-2 w-8 h-8 border-gray-400 mt-2 ${step.stage?'bg-teal-300':''}`}>
        //                 <div className={`mx-auto my-auto ${step.stage?'':'text-white'}`} >
        //                     {step.figure}
        //                 </div>
        //             </div>
        //         </div>
           
        //     ))}
        //     </div>
        // </div> */}
    