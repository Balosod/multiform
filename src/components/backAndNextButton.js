const Button = ({ back, next }) => {
  return (
    <div className="flex flex-col sm:bg-white   lg:p-0 sm:mt-6 lg:mt-0 sm:full lg:w-full">
      <div className="flex flex-row justify-between sm:mx-4 md:mx-12 lg:mx-20">
        <button
          onClick={back}
          className="md:text-sm lg:text-sm place-self-start bg-white mb-4 sm:mt-8 md:mt-6 lg:mt-20 text-gray-500 font-bold rounded-md"
        >
          Go back
        </button>
        <button
          onClick={next}
          className="md:text-sm lg:text-sm place-self-end bg-blue-900 mb-4 sm:w-2/5 md:w-2/5 lg:w-1/4 sm:px-2 md:px-0 lg:px-2 py-3 sm:mt-4 lg:mt-20 text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default Button;
