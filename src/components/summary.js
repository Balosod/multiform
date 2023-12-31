import Button from "./backAndNextButton";

const Summary = ({
  stepFourColor,
  lastStep,
  isYearly,
  selectedPlan,
  selectedAdds,
  jumpToStepTwo,
  backToStepThree,
  confirm,
}) => {
  let sum = 0;
  const numberPattern = /\d+/;
  for (let i = 0; i < selectedAdds.length; i++) {
    let price = selectedAdds[i].addsPrice;
    let addsPrice = price.match(numberPattern);

    sum += parseInt(addsPrice[0]);
    if (i === selectedAdds.length - 1) {
      console.log("yes");
      let planPrice = selectedPlan.price.match(numberPattern);
      sum += parseInt(planPrice[0]);
      console.log(planPrice);
      console.log(sum);
    }
  }

  return (
    <div
      className={`${
        stepFourColor === true && lastStep === false ? "block" : "hidden"
      } sm:-mt-10 md:-mt-0 lg:-mt-10`}
    >
      <div className="sm:bg-white  sm:rounded-lg sm:mx-6 sm:p-6 lg:p-12">
        <p className="text-blue-950 sm:text-2xl lg:text-4xl  font-bold">
          Finishing up
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Double-check everything looks OK before confirming.
        </p>

        <div className="flex flex-col sm:mt-8 md:mt-2 lg:mt-8 p-2">
          <div className="bg-gray-50 p-4">
            <div className="flex justify-between">
              <div>
                <p className="text-blue-950 font-bold">
                  {selectedPlan.name}
                  {isYearly ? " (Yearly)" : " (Monthly)"}
                </p>
                <p
                  onClick={jumpToStepTwo}
                  className="text-gray-500 text-sm  cursor-pointer hover:text-blue-800 underline"
                >
                  Change
                </p>
              </div>
              <p className="text-blue-950 font-bold pt-4">
                {selectedPlan.price}
              </p>
            </div>
            <div className="bg-gray-100 w-full h-1 my-4"></div>

            {selectedAdds.map((data) => (
              <div key={data.addsName} className=" flex mt-2 justify-between ">
                <p className="text-gray-500 text-sm">{data.addsName}</p>
                <p className="text-blue-950">{data.addsPrice}</p>
              </div>
            ))}
          </div>

          <div className="flex mt-4 justify-between p-4">
            <p className="text-gray-500 text-sm">
              Total{isYearly ? " (per yearly)" : " (per month)"}
            </p>
            <p className="text-blue-800 font-bold">
              ${sum}/{isYearly ? "yr" : "mo"}
            </p>
          </div>
        </div>
      </div>
      <Button back={backToStepThree} next={confirm} />
    </div>
  );
};

export default Summary;
