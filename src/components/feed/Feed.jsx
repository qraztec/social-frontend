import {useEffect, useState, useContext} from "react";
import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";

export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)
  console.log(user._id)
  const fetchPosts = async () => {
    try {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      setPosts(res.data.sort((p1,p2)=> new Date(p2.createdAt) - new Date(p1.createdAt)
      ));
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
        <div className="feedWrapper">
          {(!username || username===user.username) && <Share fetchPosts={fetchPosts}/>}
          {posts.map((p)=> (
            
            <Post key = {p._id} post={p}/>
          ))}
        </div>
    </div>
  );
}
