import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events ,{loader as eventLoader} from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import Root from "./pages/Root";
import Error from "./pages/Error";
import EventsRoot from "./pages/EventRoot";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventLoader,
          },
          { path: ":id", element: <EventDetails /> },
          { path: ":id/edit", element: <EditEvent /> },
          { path: "new", element: <NewEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
