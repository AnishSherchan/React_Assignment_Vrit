/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={product?.image}
          alt={product.title}
          className="w-full object-contain h-full  transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
