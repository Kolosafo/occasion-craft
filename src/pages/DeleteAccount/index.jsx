import BaseButton from "../../components/BaseButton";
import { useSelector } from "react-redux";

const DeleteAccount = () => {
  const { isLogged } = useSelector((store) => store.auth);
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {!isLogged ? (
        <span className="text-lg text-blue-600 font-bold">Login required</span>
      ) : (
        <BaseButton
          additionalStyle="mb-4"
          text={"Delete Account"}
          onClick={() => {}}
          isLoading={false}
          customBg="bg-red-600"
        />
      )}
    </div>
  );
};

export default DeleteAccount;
