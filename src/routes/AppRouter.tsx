import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../Layout/AppLayout";
import { HomePage } from "../pages/Ui/HomePage";
import DocLayout from "../Layout/DocLayout";
import { Introduction } from "../docs/components/Introduction";
import { ButtonDocs } from "../docs/components/ui/Button/ButtonDocs";
import { InputDocs } from "../docs/components/ui/Input/InputDocs";
import { AlertDocs } from "../docs/components/ui/Alert/AlertDocs";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "docs",
        element: <DocLayout />,
        children: [
          {
            index: true,
            element: <Introduction />
          },
          {
            path: "button",
            element: <ButtonDocs />
          },
          {
            path: "input",
            element: <InputDocs />
          },
          {
            path: "alert",
            element: <AlertDocs />
          },

        ]
      }
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={route} />;
}

export default AppRouter;
