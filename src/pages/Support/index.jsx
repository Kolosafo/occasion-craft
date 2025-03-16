import { useState } from "react";
import MaxWidthContainer from "../../components/max-width-container";
import CheckoutSuccess from "../../components/checkoutSuceess";
import BaseButton from "../../components/BaseButton";

const Page = () => {
  const language = "english";
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setErrorMsg("");
    if (!email) {
      setErrorMsg(
        language === "english"
          ? "Please enter your email"
          : "Ana bukatar a email"
      );
      alert(
        language === "english"
          ? "Please enter your email"
          : "Ana bukatar a email"
      );
      return;
    }
    if (!message) {
      alert(
        language === "english"
          ? "Please enter your message"
          : "Ana bukatar a rubuta sakon"
      );
      setErrorMsg(
        language === "english"
          ? "Please enter your message"
          : "Ana bukatar a rubuta sakon"
      );
      return;
    }
    setIsLoading(true);
    setSuccess(true);
    setIsLoading(false);
    // dispatch(contactSupport({ email, message, language }))
    //   .then(({ payload }) => {
    //     if (!payload || payload.message !== "success") {
    //       alert(somethingWentWrongTryAgainLang(language));
    //       setErrorMsg(somethingWentWrongTryAgainLang(language));
    //       setIsLoading(false);
    //       return;
    //     }
    //     setIsLoading(false);
    //     setSuccess(true);
    //   })
    //   .catch(() => {
    //     setIsLoading(false);
    //     alert(somethingWentWrongTryAgainLang(language));
    //     setErrorMsg(somethingWentWrongTryAgainLang(language));
    //   });
  };

  return (
    <MaxWidthContainer>
      {!success ? (
        <div className="flex flex-col w-full h-full my-4 relative">
          <h1 className="self-center mb-10 mt-4 text-lg font-semibold">
            {language === "english" ? "Support" : "Nema Taimako"}
          </h1>

          <div className="flex flex-col mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              {language === "english" ? "Email" : "Email"}
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-4 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="text"
              placeholder={"yourmail@mail.com"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              {language === "english" ? "Message" : "Rubuta Sakon"}
            </label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              value={message}
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder={
                language === "english"
                  ? "Write your issue/complaint/message here..."
                  : "rubuta sakonku ah cikin nan..."
              }
            ></textarea>
          </div>
          {errorMsg && (
            <span className="self-center text-lg font-semibold text-red-500">
              {errorMsg}
            </span>
          )}
          <BaseButton
            onClick={handleSubmit}
            isLoading={isLoading}
            text={language === "english" ? "Submit" : "Sallama"}
          />
        </div>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <CheckoutSuccess
            text={
              language === "english"
                ? "Thanks for contacting support, we will get back to you soon!"
                : "Godiya muka da neman taimakon mu! Zamu amsa ah lokaci kadan ta email da aka bada"
            }
          />
        </div>
      )}
    </MaxWidthContainer>
  );
};

export default Page;
