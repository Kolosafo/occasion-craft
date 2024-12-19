/* eslint-disable react/prop-types */
import { ColorRing } from "react-loader-spinner";
const PageLoading = ({ customLoadText }) => {
  return (
    <div className="flex justify-center flex-col mt-20 items-center self-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#000", "#000", "#000", "#000", "#000"]}
      />
      <span>{customLoadText ? customLoadText : "Loading..."}</span>
    </div>
  );
};

export default PageLoading;
