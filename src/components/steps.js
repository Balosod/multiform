import bgSide from '../bg-sidebar-desktop.svg'


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
        <div className="rounded-md w-1/3 "
        style={{
            backgroundImage: `url(${bgSide})`,
            backgroundRepeat: 'no-repeat',
        }}
        >
            {steps.map((step)=>(
                
                <div key={step.name} className='flex flex-row space-x-2 pl-8 pt-6'>
                    <div className={`flex rounded-full mt-3 border-2 w-8 h-8 border-gray-400 mt-2 ${step.stage?'bg-teal-300':''}`}>
                        <div className={`mx-auto my-auto ${step.stage?'':'text-white'}`} >
                            {step.figure}
                        </div>
                    </div>
                    <div className=' flex flex-col '>
                       <p className='text-gray-400'>{step.name}</p>
                       <p className='text-white'>{step.content}</p>
                    </div>
                  
                </div>
           
            ))}
        </div>
    )
}

export default Step;