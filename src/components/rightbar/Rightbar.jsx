import "./rightbar.css"
import {Users} from "../../dummyData.js"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg"src="assets/gift.png" alt=""/>
          <span className="birthdayText"> <b>Pola Faster</b> and <b>3 other friends</b> have a birthday today
          </span>
          </div>
          <img className="rightbarAd" src="assets/ad.png" alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarfriendList">
            {Users.map(u => (
              <Online key={u.id} user={u}/>
            ))}
            
          </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarinfoItem">
          <span className="rightbarinfoKey">City:</span>
          <span className="rightbarinfoKey">New York</span>
        </div>
        <div className="rightbarinfoItem">
          <span className="rightbarinfoKey">From:</span>
          <span className="rightbarinfoKey">Madrid</span>
        </div>
        <div className="rightbarinfoItem">
          <span className="rightbarinfoKey">Relationship:</span>
          <span className="rightbarinfoKey">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/Photos/1.jpg.webp" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Photos/2.png.webp" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Photos/3.jpg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Photos/4.jpg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Photos/5.jpg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Photos/6.png" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper"> 
          {profile ? <ProfileRightBar/> : <HomeRightBar/>}
        </div>
    </div>
  )
}
