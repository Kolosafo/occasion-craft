/* eslint-disable react/prop-types */
import { PaystackButton } from "react-paystack";

const Paystack = ({ handleSuccess, amount }) => {
  const paystackConfig = {
    channel: ["card", "bank"],
    reference: new Date().getTime().toString(),
    email: "app.haqpay@gmail.com",
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_live_904f566b2af8b8856c940788fe63e338738438d8",
  };

  const handlePaystackSuccessAction = async (reference) => {
    // console.log("SUCCESSFULLL!!", reference.reference);
    handleSuccess(reference.reference);
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("paystack closed");
  };

  const componentProps = {
    ...paystackConfig,
    text: `Pay Now - ₦${new Intl.NumberFormat().format(amount)}`,

    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <PaystackButton
      {...componentProps}
      className="md:px-10 px-6 py-4 text-lg text-white rounded-lg bg-orange-500 hover:bg-orange-800 transition-all delay-100 cursor-pointer"
    />
  );
};

export default Paystack;
