import { Layout, RequireAuth } from "./components/Layout/Layout";
import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import SinglePage from "./components/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders.js";
import About from "./routes/About/About.jsx";
import ContactPage from "./routes/Contact/Contact.jsx";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/", element: <HomePage /> },
        { path: "list", element: <ListPage />, loader: listPageLoader },
        { path: ":id", element: <SinglePage />, loader: singlePageLoader },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
