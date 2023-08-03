import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as eventLoader } from "./pages/Events";
import EventDetails, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import Root from "./pages/Root";
import Error from "./pages/Error";
import EventsRoot from "./pages/EventRoot";
import { action as newEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction }from './pages/Newsletter'

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
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEvent />, action: newEventAction },
            ],
          },
          { path: "new", 
          element: <NewEvent />, 
          action: newEventAction 
        },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
