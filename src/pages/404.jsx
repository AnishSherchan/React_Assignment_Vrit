import { useNavigate } from "react-router-dom";

import { Button } from "../components/button/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex h-screen items-center justify-center gap-5">
      <h2 className=" text-[40px] text-[#03D0C3] font-bold">Page not found!</h2>
      <Button title="Go back." handleClick={() => navigate("/")} />
    </div>
  );
};

export default NotFound;
