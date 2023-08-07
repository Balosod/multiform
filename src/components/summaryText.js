

const SummaryText = ({lastStep}) =>{
    return(
        <div className={`${lastStep?'block':'hidden'}`}>
                    <p className='text-blue-950 text-4xl mt-10 font-bold'>Finishing up</p>
                    <p className='text-gray-500 mt-2 text-sm'>Double-check everything looks OK before confirming.</p>
                    
                    
                    
                </div>

    )
}
export default SummaryText;