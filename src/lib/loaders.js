import apiRequest from "./apiRequest";

// Single Post
export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest("/post/" + params.id);
  console.log("dddd", res.data);
  console.log(params.id);

  return res.data;
};

// Posts List
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];

  const response = await apiRequest("/post" + (query ? "?" + query : ""));
  console.log("ddddddd", response);

  return { postResponse: response.data };
};

// Profile Page
export const profilePageLoader = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const postRes = await apiRequest("/auth/profilePosts", {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
  const chatRes = await apiRequest("/chat", {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
  console.log(chatRes);

  return {
    postResponse: postRes.data,
    chatResponse: chatRes.data,
  };
};
