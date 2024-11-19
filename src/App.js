import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Posts from "./pages/Post/Posts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "*",
      element: <div>404 Page Not Found! About is unable to reach</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
