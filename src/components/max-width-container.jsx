/* eslint-disable react/prop-types */
function MaxWidthContainer({ children, className }) {
  return (
    <div
      className={`h-full mx-auto w-full max-w-screen-2xl px-6 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
}

export default MaxWidthContainer;
