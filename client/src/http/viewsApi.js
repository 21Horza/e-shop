import { $host } from "./index";

export const increaseViews = async (postId) => {
  const data = await $host.post(`/views/increase/${postId}`);
  return data;
};