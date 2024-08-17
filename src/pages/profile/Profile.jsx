import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router"

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({})
  const username = useParams().username

  useEffect( () => {
    const fetchUser = async() => {
      try {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)}
      catch (err) {
        console.error("Error fetching posts:", err);
      }
    }
    fetchUser();
  },[username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profilerightTop">
            <div className="profileCover">
              <img className="profilecoverImg" src={user.coverPicture ? PF+user.coverPicture : PF+"basiccover.png"} alt="" />
              <img className="profileuserImg" src={user.profilePicture ? PF+user.profilePicture : PF+"nopfp.png"} alt="" />

            </div>
            <div className="profileInfo">
              <h4 className="profileinfoName">{user.username}</h4>
              <span className="profileinfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profilerightBottom">
            <Feed username={username}/>
            <Rightbar user={user} />
          </div>

        </div>

      </div>

    </>
  )
}
