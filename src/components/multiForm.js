import { useState } from "react";
import Step from "./steps";
import PersonalInfo from "./personalInfo";
import SelectPlan from "./selectPlan";
import AddOns from "./addOns";
import Summary from "./summary";
import SummaryText from "./summaryText";
import Footer from "./footer";





const Form = () => {
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedPlan, setSelectedPlan] = useState({ name: null, price:null, isYearly: false });
    const [selectedAdds, setSelectedAdds] = useState([])

   

    const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [phoneError, setPhoneError] = useState(false);
    const [phoneValid, setPhoneValid] = useState(true);
    const [planError, setPlanError] = useState(false);
    const [addsError, setAddsError] = useState(false);

    const [stepOneColor,setStepOneColor] = useState(true)
    const [stepTwoColor,setStepTwoColor] = useState(false)
    const [stepThreeColor,setStepThreeColor] = useState(false)
    const [stepFourColor,setStepFourColor] = useState(false)
    const [lastStep, setLastStep] = useState(false)
    const [isYearly, setIsYearly] = useState(false);

   
    const backToStepOne = () =>{
        setStepOneColor(true)
        setStepTwoColor(false)
    }

    const backToStepTwo = () =>{
        console.log("called")
        setStepTwoColor(true)
        setStepThreeColor(false)
    }

    const jumpToStepTwo = () =>{
        console.log("called")
        setStepTwoColor(true)
        setStepThreeColor(false)
        setStepFourColor(false)
    }

    const backToStepThree = () =>{
        console.log("called")
        setStepThreeColor(true)
        setStepFourColor(false)
    }

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
    const isValidPhoneNumber = (phoneNumber) => {
        // Regular expression for phone number validation
        const phoneRegex = /^(\+\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        return phoneRegex.test(phoneNumber);
      };


const infoHandler = () => {
    
    const checkAllInfo = () =>{

        if (name.trim()===''){
            setNameError(true)
        }else{
            setNameError(false)
        }
        if (email.trim()===''){
            setEmailError(true)
            setEmailValid(true)
        }else{
            setEmailError(false)
            const isValidEmail = validateEmail(email);
            setEmailValid(isValidEmail);
        }
        if (phone.trim()===''){
            setPhoneError(true)
            setPhoneValid(true)
        }else{
            setPhoneError(false)
            const isValidPhone = isValidPhoneNumber(phone);
            setPhoneValid(isValidPhone);
        }

        setStepOneColor(false)
        setStepTwoColor(true)
        if (name.trim() !== '' && email.trim() !== ''  && validateEmail(email) === true && isValidPhoneNumber(phone) === true){
            return true
        } else{
            return false
        }
        

    }
    
    const stateOne = checkAllInfo()
    console.log(stateOne)
    if (stateOne){
        setStepOneColor(false)
        setStepTwoColor(true)
        return
    }
    setStepOneColor(true)
    setStepTwoColor(false)

}

   const nameHandler = (data) =>{
       setName(data)
   }

   const emailHandler = (data) =>{
    setEmail(data)
    }

    const phoneHandler = (data) =>{
        setPhone(data)
    }

    const handleToggleChange = () => {
        setIsYearly(!isYearly);
        setAddsError(false);
        setSelectedPlan({ name: null, price:null, isYearly: isYearly })
        setSelectedAdds([])
       
      };


    const planHandler = () => {
        if (selectedPlan.name === null){
            setPlanError(true)
            return

        }
        setStepTwoColor(false)
        setStepThreeColor(true)

    }

    const addsHandler = () => {
        if (selectedAdds.length === 0){
            setAddsError(true)
            return
        }
        setStepThreeColor(false)
        setStepFourColor(true)
       

    }

    const confirm = () =>{
        setLastStep(true)
        
       
    }

    const handlePlanSelection = (plan) => {
        console.log(plan)
        setPlanError(false)
        setSelectedPlan({ name: plan.name, price: plan.priceMonthly || plan.priceYearly, isYearly: isYearly });
          
      };
    

    const handleAddsSelection = (add) => {
        setAddsError(false);
        if (selectedAdds.some(item => item.addsName === add.addsName && item.addsPrice === add.addsPrice)) {
          setSelectedAdds(prevAdds => prevAdds.filter(item => item.addsName !== add.addsName || item.addsPrice !== add.addsPrice));
        } else {
          setSelectedAdds(prevAdds => [...prevAdds, add]);
        }
      };

    
    //console.log(name)
    //console.log(selectedPlan)
     //console.log(selectedAdds)
     //console.log(isYearly)
    


    return(

        <div className="bg-gray-200 sm:h-screen md:h-full  flex justify-center">
           <div className="flex sm:flex-col md:flex-row  md:space-x-2 lg:flex-row  md:space-x-4 lg:space-x-4 sm:w-full md:w-2/3 lg:w-2/3 md:my-10 lg:my-10 md:rounded-lg lg:rounded-lg sm:p-0 md:p-4 lg:p-4 sm:bg-gray-200 md:bg-white lg:bg-white">
            
            {/* Step */}
            <Step stepOneColor={stepOneColor} stepTwoColor={stepTwoColor} stepThreeColor={stepThreeColor} stepFourColor={stepFourColor} />

            <div className='lg:mt-10   sm:full md:w-2/3 lg:w-full'>


                {/* PERSONAL INFO */}
                <PersonalInfo stepOneColor={stepOneColor} name={name} email={email} phone={phone} 
                nameError={nameError} emailError={emailError} phoneError={phoneError} emailValid={emailValid} 
                phoneValid={phoneValid} infoHandler={infoHandler} nameHandler={nameHandler}
                emailHandler={emailHandler} phoneHandler={phoneHandler}/>
                

                {/* SELECT PLAN */}
                <SelectPlan stepTwoColor={stepTwoColor} backToStepOne={backToStepOne} selectedPlan={selectedPlan} handlePlanSelection={handlePlanSelection} handleToggleChange={handleToggleChange} isYearly={isYearly} planHandler={planHandler} planError={planError}/>

                {/* ADD-ONS */}
                <AddOns stepThreeColor={stepThreeColor} isYearly={isYearly}  handleAddsSelection={handleAddsSelection} selectedAdds={selectedAdds} addsError={addsError} addsHandler={addsHandler} backToStepTwo={backToStepTwo}/>

                {/* SUMMARY */}
                <Summary stepFourColor={stepFourColor} lastStep={lastStep} isYearly={isYearly} selectedPlan={selectedPlan} selectedAdds={selectedAdds} jumpToStepTwo={jumpToStepTwo} backToStepThree={backToStepThree} confirm={confirm}/>

                {/* SUMMARY TEXT */}
                <SummaryText lastStep={lastStep}/>

                <Footer />





            </div>
          
           </div>
        </div>
    )
}

export default Form;