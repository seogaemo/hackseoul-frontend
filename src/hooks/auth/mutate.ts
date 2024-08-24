import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiInstance } from "../../lib/api";

interface LoginDto {
  id: string;
  password: string;
}

export enum UserRole {
  UNSPECIFIED = 0, // 기본값 또는 알 수 없는 역할
  ADMIN = 1, // 관리자
  DISTRIBUTOR = 2, // 위탁판매자
}

export interface User {
  uid: string;
  name: string;
  id: string;
  role: UserRole;
}

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: LoginDto) => {
      const res = await apiInstance().post("/auth/signin", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return query.queryKey[0] === "userinfo";
        },
      });
    },
    onError: (error) => {
      return error;
    },
  });
};
