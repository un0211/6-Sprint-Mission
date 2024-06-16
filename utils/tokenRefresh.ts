import { AxiosInstance } from "axios";

export const tokenRefresh = async (
  instance: AxiosInstance,
  refreshToken: string
) => {
  const { data } = await instance.post("/auth/refresh-token", {
    refreshToken,
  });

  const newAccessToken = data.accessToken;
  localStorage.setItem("accessToken", newAccessToken);
};
