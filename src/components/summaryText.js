import thankyou from "../icon-thank-you.svg";

const SummaryText = ({ lastStep }) => {
  return (
    <div
      className={`${
        lastStep ? "block" : "hidden"
      } text-center sm:-mt-10 md:-mt-0 lg:-mt-10`}
    >
      <div className="sm:bg-white  sm:rounded-lg sm:mx-6 sm:p-6 lg:p-12 sm:mb-20 lg:mb-0">
        <div className="lg:mt-20 lg:mb-20 p-10">
          <img
            className="mx-auto"
            src={thankyou}
            alt="thankyou"
            width={90}
            height={90}
          />

          <p className=" text-blue-950 text-4xl font-bold mt-10">Thank You!</p>
          <p className="text-gray-500 text-sm mt-4">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support feel free to email us at
            support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default SummaryText;
