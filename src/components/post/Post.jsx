import "./post.css"
import {MoreVert} from "@material-ui/icons"
import {useContext, useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setisLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext)


useEffect(() => {
  setisLiked(post.likes.includes(currentUser._id))
},[currentUser._id,post.likes])


  useEffect( () => {
    const fetchUser = async() => {
      try {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)}
      catch (err) {
        console.error("Error fetching posts:", err);
      }
    }
    fetchUser();
  },[post.userId])

  const likeHandler = () => {
    try{
      axios.put("/posts/" + post._id+"/like", {userId:currentUser._id})
    }
      catch(err){

      }
    
    setLike(isLiked ? like - 1: like + 1)
    setisLiked(!isLiked)
  }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="posttopLeft">
                  <Link to ={`profile/${user.username}`}>
                    <img className="postprofileImg" src={user.profilePicture ? PF+user.profilePicture : PF + "nopfp.png"} 
                    alt=""/>
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="posttopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className = "postImg" src={PF+post.img} alt=""/>
            </div>
            <div className="postBottom">
                <div className="postbottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt=""/>
                    <img className="likeIcon" src = {`${PF}heart.png`} onClick={likeHandler} alt=""/>
                    <span className="postlikeCounter">{like} people like it</span>
                </div>
                <div className="postbottomRight">
                    <span className="postcommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
