/* eslint-disable react/prop-types */
import Header from "./header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
