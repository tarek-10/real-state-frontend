import "./ProfilePage.scss";
import List from "../../components/List/List.jsx";
import Chat from "../../components/Chat/Chat.jsx";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";
import apiRequest from "../../lib/apiRequest.js";
import { useContext } from "react";

function ProfilePage() {
  const data = useLoaderData();
  console.log(data);
  const { updateUser, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Default values to prevent undefined errors
  const userPosts = (data?.postResponse?.userPosts || []).map((post) => ({
    ...post,
    images: post.images ? post.images : post.img ? [post.img] : [],
  }));

  const savedPosts = (data?.postResponse?.savedPosts || []).map((post) => ({
    ...post,
    images: post.images ? post.images : post.img ? [post.img] : [],
  }));

  const chats = data?.chatResponse || [];

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.name}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List posts={userPosts} />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List posts={savedPosts} />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat chats={chats} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
