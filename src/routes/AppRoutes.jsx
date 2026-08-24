import { createBrowserRouter } from "react-router";

import AppLayout from "../Layout/AppLayout";

import Home from "../pages/Home";
import Reels from "../pages/Reels";
import Messages from "../pages/Messages";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "reels",
        Component: Reels,
      },
      {
        path: "messages",
        Component: Messages,
      },
      {
        path: "explore",
        Component: Explore,
      },
    ],
  },

  {
    path: "login",
    Component: Login,
  },

  // Catch-all route
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;