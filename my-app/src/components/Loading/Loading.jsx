import { RotatingSquare } from "react-loader-spinner";

export const Loading = () => {
  return (
    <>
      <RotatingSquare
        height="300"
        width="300"
        color="#F2AA1F"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};
