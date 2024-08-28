/* eslint-disable react/prop-types */

export const Button = ({ title, handleClick }) => {

  return (
    <button
      className="bg-[#0CA6D7] p-2 px-6 rounded-lg text-white"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
