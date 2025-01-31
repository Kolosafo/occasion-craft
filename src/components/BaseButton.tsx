import React from "react";
import { ColorRing } from "react-loader-spinner";

const BaseButton = ({
  isLoading,
  additionalStyle,
  text,
  onClick,
  customBg,
}: {
  isLoading: boolean;
  additionalStyle?: string;
  customBg?: string;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      disabled={isLoading}
      className={`rounded flex justify-center items-center ${
        customBg ? customBg : "bg-blue-500 hover:bg-blue-700"
      }  px-4 transition duration-300 py-2 font-bold text-white  ${
        isLoading ? "cursor-not-allowed opacity-50" : ""
      } ${additionalStyle}`}
      onClick={onClick}
    >
      {isLoading ? (
        <ColorRing
          visible={true}
          height="30"
          width="30"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default BaseButton;
