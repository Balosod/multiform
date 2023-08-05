


const PersonalInfo = ({stepOneColor, name,email,phone,nameError,emailError,phoneError,emailValid,phoneValid,infoHandler, nameHandler,emailHandler,phoneHandler}) => {
    return(
        <div className={`${stepOneColor?'block':'hidden'}`}>
                    <p className='text-blue-950 text-4xl mt-10 font-bold'>Personal info</p>
                    <p className='text-gray-500 mt-4 text-sm'>Please provide your name, email address and phone number</p>
                    <div className='flex flex-col mt-8'>
                        <div className='flex justify-between mt-6'>
                            <label className='text-blue-950  text-sm'>Name</label>
                            {nameError && (<label className='text-red-500 text-sm font-bold' >This field is required</label>)}
                            
                        </div>
                        <input type='text' placeholder="e.g, John Doe" value={name} onChange={(e)=>nameHandler(e.target.value)} className={`h-12 border-2 border-gray-200 pl-4 rounded-md hover:border-purple-700 hover:border focus:border  ${nameError?" placeholder-red-400":''}`}/>
                    </div>
                    <div className='flex flex-col mt-6'>
                    <div className='flex justify-between'>
                            <label className='text-blue-950 text-sm' >Email Address</label>
                            {emailError && (<label className='text-red-500 text-sm font-bold' >This field is required</label>)}
                            {!emailValid && (<label className='text-red-500 text-sm font-bold' >Please enter a valid email address.</label>)}
                        </div>
                        <input type='text' placeholder="e.g, test@gmail.com" value={email} onChange={(e)=>emailHandler(e.target.value)}  className={`h-12 border-2 border-gray-200 pl-4 rounded-md hover:border-purple-700 hover:border focus:border ${emailError?" placeholder-red-400":''}`}/>
                    </div>
                    <div className='flex flex-col mt-6'>
                    <div className='flex justify-between'>
                            <label className='text-blue-950 text-sm'>Phone Number</label>
                            {phoneError && (<label className='text-red-500 text-sm font-bold' >This field is required</label>)}
                            {!phoneValid && (<label className='text-red-500 text-sm font-bold' >phone number not valid</label>)}
                    </div>
                        <input type='text' placeholder="e.g, +1 234 567 890" value={phone} onChange={(e)=>phoneHandler(e.target.value)} className={`h-12  border-2 border-gray-200 pl-4 rounded-md hover:border-purple-700 hover:border focus:border ${phoneError?" placeholder-red-400":''}`}/>
                        <button onClick={infoHandler} className='place-self-end bg-blue-900 mb-4 w-1/4 px-2 py-3 mt-20 text-white rounded-md'>Next Step</button>
                    </div>
                   
                    
                </div>
    )
}

export default PersonalInfo;