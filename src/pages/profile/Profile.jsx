import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profilerightTop">
            <div className="profileCover">
              <img className="profilecoverImg" src="assets/Posts/2.jpg" alt="" />
              <img className="profileuserImg" src="assets/Photos/3.jpg" alt="" />

            </div>
            <div className="profileInfo">
              <h4 className="profileinfoName">Gerum Haile</h4>
              <span className="profileinfoDesc">Hey</span>
            </div>
          </div>
          <div className="profilerightBottom">
            <Feed />
            <Rightbar profile />
          </div>

        </div>

      </div>

    </>
  )
}
