/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";

const PaymentButton = ({ runSaveHandleItemPurchased }) => {
  const { user } = useSelector((store) => store.auth);

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: 50000 * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_live_904f566b2af8b8856c940788fe63e338738438d8",
  };

  const handlePaystackSuccessAction = async () => {
    // console.log("SUCCESSFULLL!!", reference);
    await runSaveHandleItemPurchased();
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("paystack closed");
  };

  const componentProps = {
    ...paystackConfig,
    text: "N50,000",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return <PaystackButton {...componentProps} className="" />;
};

export default PaymentButton;
