import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/AppRoutes";
import { UserProvider } from "./Contexts/UserContext";
import { StoryProvider } from "./Contexts/StoryContext";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <StoryProvider>
      <RouterProvider router={router} />
    </StoryProvider>
  </UserProvider>
);
