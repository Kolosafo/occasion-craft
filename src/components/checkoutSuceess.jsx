/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";

const CheckoutSuccess = ({ text }) => {
  return (
    <div>
      <div className="flex flex-col h-[70vh] justify-center items-center mt-20">
        <FaCheckCircle size={"400px"} color={"green"} />
        <h2 className="text-3xl my-2 text-center">
          {text ? text : "Payment Successful!"}
        </h2>
        {/* <h2 style={{ fontSize: "20px" }} className="mb-4">
          Check your email for further proceedings
        </h2> */}
      </div>
    </div>
  );
};

export default CheckoutSuccess;
