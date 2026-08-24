import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import Navbar from "../components/Navbar";
import { StoryProvider } from "../Contexts/StoryContext";

const AppLayout = () => {
  const { isLoggedin } = useContext(UserContext);

  if (!isLoggedin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <main className="ml-[72px] min-h-screen">
        
          <Outlet />
        
      </main>
    </div>
  );
};

export default AppLayout;
