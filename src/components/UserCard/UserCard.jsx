/* eslint-disable react/prop-types */

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto mb-6">
      <img
        src={`https://via.placeholder.com/150?text=${user?.name}`} // Placeholder image
        alt={user?.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
        <p className="text-gray-600 mb-2">
          <strong>Username:</strong> {user?.username}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> {user?.email}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Phone:</strong> {user?.phone}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Website:</strong>{" "}
          <a
            href={`http://${user?.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user?.website}
          </a>
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Company:</strong> {user?.company?.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
