/* eslint-disable react/prop-types */

const FullScreen = ({ img }) => {
  return (
    <div className="h-[90vh] w-[70vw] absolute top-10 left-10">
      <img src={img} alt="fullscreenimg" className="w-full object-contain" />
    </div>
  );
};

export default FullScreen;
