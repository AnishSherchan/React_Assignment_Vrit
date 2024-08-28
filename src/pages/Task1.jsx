import useFetch from "../api/useFetch";
import { STORE_API } from "../utils/constand";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import Error from "../components/ErrorMessage/ErrorMessage";
import Loading from "../components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../components/ProductCard/ProductCard";

const Task1 = () => {
  const { data, loading, error } = useFetch(`${STORE_API}products`);

  //   State handles
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="max-w-[1240px] mx-auto mt-10 flex flex-col gap-10">
      <h1 className=" text-[35px] font-light text-center">
        Task 1: Search Filter Component
      </h1>

      {/* Search Filter component */}
      <SearchFilter
        data={data}
        // Rendering data below
        render={(filteredData) => (
          <section className=" flex flex-wrap justify-center gap-10">
            {filteredData?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
      />
    </div>
  );
};

export default Task1;
