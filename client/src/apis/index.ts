import AxiosInstance from "./axios";

export async function getData() {
  try {
    const response = await AxiosInstance({ url: "/users", method: "GET" }).then((res) => res.data );
    return response;
  } catch (error) {
    console.error(error);
  }
}
