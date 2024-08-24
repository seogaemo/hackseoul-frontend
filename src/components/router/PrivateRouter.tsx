import { Navigate, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { User, UserRole } from "../../hooks/auth";
import { QueryClient } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

const loader = (queryClient: QueryClient) => async () => {
  await queryClient.invalidateQueries({
    predicate: (query) => {
      return query.queryKey[0] === "userinfo";
    },
  });

  return (
    (await queryClient.fetchQuery({
      queryKey: ["userinfo"],
      queryFn: async () => {
        const { data } = await authInstance().get<User>("/auth/me");
        return data ?? "";
      },
    })) ?? ""
  );
};

interface PrivateRouterProps {
  admin?: boolean;
}
function PrivateRouter({ admin }: PrivateRouterProps) {
  const userInfo = useLoaderData() as User | undefined;

  const location = useLocation();

  if (admin && userInfo?.role === UserRole.ADMIN) {
    return <Outlet />;
  } else if (!admin && userInfo && userInfo.role !== UserRole.ADMIN) {
    return <Outlet />;
  } else if (!admin && userInfo && userInfo.role === UserRole.ADMIN) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <Navigate
      to={{
        pathname: "/login",
        search: `?from=${location.pathname + location.search}`,
      }}
      replace
    />
  );
}

PrivateRouter.loader = loader;

export default PrivateRouter;
