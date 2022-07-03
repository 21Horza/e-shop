import { $authHost } from "./index";

export const sendLike = async (postId) => {
  const data = await $authHost.post(`/likes/like/${postId}`);
  console.log('data',data)
  return data;
};

export const sendDislike = async (postId) => {
  const data = await $authHost.delete(`/likes/dislike/${postId}`);
  console.log('data dis',data)
  return data;
};