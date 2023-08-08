import thankyou from '../icon-thank-you.svg'

const SummaryText = ({lastStep}) =>{
    return(
        <div className={`${lastStep?'block':'hidden'} text-center -mt-10`}>
            <div className="sm:bg-white  sm:rounded-md sm:mx-6 sm:p-6 md:p-12 sm:mb-20 md:mb-0">

                    <div className="md:mt-20 md:mb-20 p-10">
                    <img
                                 className="mx-auto"
                                 src={thankyou}
                                 alt="thankyou"
                                 width={90}
                                 height={90}
                                 />

                    <p className=' text-blue-950 text-4xl font-bold mt-10'>Thank You!</p>
                    <p className='text-gray-500 text-sm mt-4'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support feel free to email us at support@loremgaming.com</p>

                    </div>
                    </div>
                    
                </div>

    )
}
export default SummaryText;