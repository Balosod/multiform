import { useState } from "react";
import arcade from '../icon-arcade.svg'
import advanced from '../icon-advanced.svg'
import pro from '../icon-pro.svg'
import Step from "./steps";
import PersonalInfo from "./personalInfo";
import SelectPlan from "./selectPlan";
import AddOns from "./addOns";




const Form = () => {
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedPlan, setSelectedPlan] = useState({ name: null, price:null, isYearly: false });

   

    const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [phoneError, setPhoneError] = useState(false);
    const [phoneValid, setPhoneValid] = useState(true);
    const [planError, setPlanError] = useState(false);

    const [stepOneColor,setStepOneColor] = useState(true)
    const [stepTwoColor,setStepTwoColor] = useState(false)
    const [stepThreeColor,setStepThreeColor] = useState(false)
    const [stepFourColor,setStepFourColor] = useState(false)
    const [isYearly, setIsYearly] = useState(false);

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

    
    


    const backHandlerOne = () =>{
        setStepOneColor(true)
        setStepTwoColor(false)
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
            console.log("yes")
            return true
        } else{
            console.log("no")
            return false
        }
        

    }
    
    const stateOne = checkAllInfo()
    // console.log(stateOne)
    // if (stateOne){
    //     console.log("yes2")
    //     setStepOneColor(false)
    //     setStepTwoColor(true)
    // }

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
        setSelectedPlan({ name: null, price:null, isYearly: isYearly })
       
      };


    const planHandler = () => {
        //console.log(selectedPlan)
        if (selectedPlan.name === null){
            setPlanError(true)
            return

        }
        setStepTwoColor(false)
        setStepThreeColor(true)

    }

    const handlePlanSelection = (plan) => {
        // console.log(plan)
        setPlanError(false)
        setSelectedPlan({ name: plan.name, price: plan.priceMonthly || plan.priceYearly, isYearly: isYearly });
        // setSelectedPlan((prevSelectedPlan) => ({
        //     name: plan,
        //     isYearly: prevSelectedPlan.isYearly
        //   }));
          
      };
    
    
    console.log(selectedPlan)
    //   console.log(name)
    


    return(

        <div className="bg-gray-200  flex justify-center">
            
           <div className="flex flex-row space-x-10 w-2/3 my-20 rounded-md p-4 bg-white ">
            
            {/* Step */}
            <Step stepOneColor={stepOneColor} stepTwoColor={stepTwoColor} stepThreeColor={stepThreeColor} stepFourColor={stepFourColor} />

            <div className=' pl-6 pr-10 w-3/5'>


                {/* PERSONAL INFO */}
                <PersonalInfo stepOneColor={stepOneColor} name={name} email={email} phone={phone} 
                nameError={nameError} emailError={emailError} phoneError={phoneError} emailValid={emailValid} 
                phoneValid={phoneValid} infoHandler={infoHandler} nameHandler={nameHandler}
                emailHandler={emailHandler} phoneHandler={phoneHandler}/>
                

                {/* SELECT PLAN */}
                <SelectPlan stepTwoColor={stepTwoColor} backHandlerOne={backHandlerOne} plans={plans} selectedPlan={selectedPlan} handlePlanSelection={handlePlanSelection} handleToggleChange={handleToggleChange} isYearly={isYearly} planHandler={planHandler} planError={planError}/>

                {/* ADD-ONS */}
                <AddOns stepThreeColor={stepThreeColor} isYearly={isYearly}/>





            </div>
          
           </div>
        </div>
    )
}

export default Form;