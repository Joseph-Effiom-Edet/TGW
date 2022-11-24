import Login from "./login/Login";
import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
