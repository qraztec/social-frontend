import "./rightbar.css"
import { Users } from "../../dummyData.js"
import Online from "../online/Online"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext.js"
import {Add, Remove} from "@material-ui/icons"

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])
  const {user:currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.following.includes(user?.id))

  // useEffect(()=> {
  //   setFollowed(currentUser.following.includes(user?.id))
  // },[currentUser,user.id])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err)
      }
    };
    getFriends();
  }, [user])
  const handleClick=async() => {
    try{
      if (followed){
        await axios.put("/users/" + user._id +"/unfollow", {userId:currentUser._id})
        dispatch({type:"UNFOLLOW", payload:user._id})
      } else {
        await axios.put("/users/" + user._id +"/follow", {userId:currentUser._id})
        dispatch({type:"FOLLOW", payload:user._id})
      }

    } catch(err) {
      console.log(err)
    }
    setFollowed(!followed)
  }

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText"> <b>Pola Faster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}ad.png`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarfollowButton" onClick={handleClick}>
          {followed? "Unfollow":"Follow"}
          {followed?<Remove/>:<Add/>}
        </button>
      )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarinfoItem">
            <span className="rightbarinfoKey">City:</span>
            <span className="rightbarinfoValue">{user.city}</span>
          </div>
          <div className="rightbarinfoItem">
            <span className="rightbarinfoKey">From:</span>
            <span className="rightbarinfoValue">{user.from}</span>
          </div>
          <div className="rightbarinfoItem">
            <span className="rightbarinfoKey">Relationship:</span>
            <span className="rightbarinfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map(friend => (
            <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
              <div className="rightbarFollowing">
                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "nopfp.png"} alt="" className="rightbarfollowingImg" />
                <span className="rightbarfollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}


        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
