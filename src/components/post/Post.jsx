import "./post.css"
import {MoreVert} from "@material-ui/icons"
import {Users} from "../../dummyData"
import {useState} from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setisLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1: like + 1)
    setisLiked(!isLiked)
  }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="posttopLeft">
                    <img className="postprofileImg" src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt=""/>
                    <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="posttopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className = "postImg" src={post.photo} alt=""/>
            </div>
            <div className="postBottom">
                <div className="postbottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt=""/>
                    <img className="likeIcon" src = "assets/heart.png" onClick={likeHandler} alt=""/>
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
