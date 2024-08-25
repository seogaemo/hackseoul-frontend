import {
  RouterProvider as CustomRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PrivateRouter from "../router/PrivateRouter";
import { QueryClient } from "@tanstack/react-query";
import Index from "../../pages";
import Login from "../../pages/login";
import Layout from "../Layout";
import ProductCreate from "../../pages/product/create";
import ProductDetail from "../../pages/product/detail";
import CompanyCreate from "../../pages/company/create";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <PrivateRouter />,
    loader: PrivateRouter.loader(queryClient),
    children: [
      // { path: "/", element: <Index /> },
      // {
      //   path: "edit/:id",
      //   loader: ({ params }) => {
      //     return Tag.Manage.loader(params.id ?? "", queryClient);
      //   },
      //   element: (
      //     <Suspense fallback={null}>
      //       <Tag.Manage />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "create/:id",
      //   loader: ({ params }) => {
      //     return Tag.Manage.loader(params.id ?? "", queryClient);
      //   },
      //   element: (
      //     <Suspense fallback={null}>
      //       <Tag.Manage init />
      //     </Suspense>
      //   ),
      // },
      // { path: "edit", element: <Edit /> },
    ],
  },
  // {
  //   element: <PrivateRouter admin />,
  //   loader: PrivateRouter.loader(queryClient),
  //   children: [{ path: "admin", element: <Admin /> }],
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/product/create", element: <ProductCreate /> },
      { path: "/product/detail/:productId", element: <ProductDetail /> },
      { path: "/company/create", element: <CompanyCreate /> },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  { path: "*", element: <div>404</div> },
]);

export default function RouterProvider() {
  return <CustomRouterProvider router={router} />;
}
