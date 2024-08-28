import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1240px] mx-auto mt-10 flex flex-col gap-10">
      <h1 className=" text-center text-[40px] font-light">
        <span className=" font-semibold">Vrit</span>Tech ReactJs Assignment.
      </h1>

      <div id="Task_1" className=" flex gap-4 flex-wrap items-center">
        <h2 className=" text-[25px]">- Task 1: Search Filter Component</h2>{" "}
        <a
          onClick={() => navigate("/task1")}
          className=" text-blue-500 cursor-pointer text-[16px]"
        >
          View Task
        </a>
      </div>

      <div id="Task_1" className=" flex flex-wrap gap-4 items-center">
        <h2 className=" text-[25px]">
          - Task 2: Implement and Test a React Component with API Integration{" "}
        </h2>{" "}
        <a
          onClick={() => navigate("/task2")}
          className=" text-blue-500 cursor-pointer text-[16px]"
        >
          View Task
        </a>
      </div>
    </div>
  );
};

export default Home;
