import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
    {isAuthenticated ? (
      <Navigate to="/" />
    ) : (
      <>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet /> 
          <h1>HELLo</h1>
        </section>

       
      </>
    )}
  </>
  );
};

export default AuthLayout;