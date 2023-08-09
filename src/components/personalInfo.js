


const PersonalInfo = ({stepOneColor, name,email,phone,nameError,emailError,phoneError,emailValid,phoneValid,infoHandler, nameHandler,emailHandler,phoneHandler}) => {
    return(
        <div className={`${stepOneColor?'block':'hidden'} sm:-mt-10 md:-mt-0 lg:-mt-10 `}>
            <div className="sm:bg-white sm:rounded-lg sm:mx-6 sm:p-6 lg:p-12  ">
                    <p className='text-blue-950 sm:text-2xl lg:text-4xl lg:mt-2 font-bold'>Personal info</p>
                    <p className='text-gray-500  mt-4 text-sm'>Please provide your name, email address and phone number</p>
                    <div className='flex flex-col mt-8'>
                        <div className='flex justify-between lg:mt-6'>
                            <label className='text-blue-950  text-sm'>Name</label>
                            {nameError && (<label className='text-red-500 text-sm font-bold' >This field is required</label>)}
                            
                        </div>
                        <input type='text' placeholder="e.g, John Doe" value={name} onChange={(e)=>nameHandler(e.target.value)} className={`h-12 border-2 border-gray-200 pl-4 rounded-lg hover:border-purple-700 hover:border focus:border  ${nameError?" placeholder-red-400":''}`}/>
                    </div>
                    <div className='flex flex-col mt-6'>
                    <div className='flex justify-between'>
                            <label className='text-blue-950 text-sm' >Email Address</label>
                            {emailError && (<label className='text-red-500 text-sm font-bold' >This field is required</label>)}
                            {!emailValid && (<label className='text-red-500 text-sm font-bold' >Please enter a valid email address.</label>)}
                        </div>
                        <input type='text' placeholder="e.g, test@gmail.com" value={email} onChange={(e)=>emailHandler(e.target.value)}  className={`h-12 border-2 border-gray-200 pl-4 rounded-lg hover:border-purple-700 hover:border focus:border ${emailError?" placeholder-red-400":''}`}/>
                    </div>
                    <div className='flex flex-col mt-6'>
                    <div className='flex justify-between'>
                            <label className='text-blue-950 text-sm'>Phone Number</label>
                            {phoneError && (<label className='text-red-500 text-sm font-bold' >This field is required</label>)}
                            {!phoneValid && (<label className='text-red-500 text-sm font-bold' >phone number not valid</label>)}
                    </div>
                        <input type='text' placeholder="e.g, +1 234 567 890" value={phone} onChange={(e)=>phoneHandler(e.target.value)} className={`h-12  border-2 border-gray-200 pl-4 rounded-lg hover:border-purple-700 hover:border focus:border ${phoneError?" placeholder-red-400":''}`}/>
                    </div>
                   
                    </div> 

                    <div className="flex justify-end sm:bg-gray-200  sm:p-2 md:p-0 lg:p-0 sm:mt-20 md:mt-8 lg:mt-0 sm:full lg:w-full">
                        <button onClick={infoHandler} className='md:text-xs lg:text-sm place-self-end bg-blue-900 lg:mb-4 sm:w-1/4 md:w-1/5 sm:mr-4 md:mr-12 lg:mr-16 lg:w-1/4 sm:px-2 md:px-1 lg:px-2 sm:py-3 lg:py-3 lg:mt-20 text-white rounded-lg'>Next Step</button>
                    </div>
                    {/* <div className="text-center">
                        <small className="text-blue-950">powered by sodiq</small>
                    </div> */}
                </div>
            
    )
}

export default PersonalInfo;