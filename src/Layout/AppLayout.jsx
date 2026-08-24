import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  const { isLoggedin } = useContext(UserContext);

  if (!isLoggedin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="ml-[72px] min-h-screen">
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;