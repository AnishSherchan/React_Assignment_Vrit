import useFetch from "../api/useFetch";
import { USER_API } from "../utils/constand";
import Error from "../components/ErrorMessage/ErrorMessage";
import Loading from "../components/LoadingSpinner/LoadingSpinner";
import UserCard from "../components/UserCard/UserCard";

const Task1 = () => {
  const { data, loading, error } = useFetch(`${USER_API}`);

  //   State handles
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="max-w-[1240px] mx-auto mt-10 flex flex-col gap-10">
      <h1 className=" text-[35px] font-light text-center">
        Task 2: Implement and Test a React Component with API Integration
      </h1>

      <section className=" flex flex-wrap justify-center gap-10">
        {data?.map((user) => (
          <UserCard key={user?.id} user={user || []} />
        ))}
      </section>
    </div>
  );
};

export default Task1;
