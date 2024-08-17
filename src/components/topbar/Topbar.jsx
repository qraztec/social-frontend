import "./topbar.css"
import {Search} from "@material-ui/icons"
import {Person, Chat, Notifications} from "@material-ui/icons"
import { useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export default function Topbar() {

    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to ="/" style={{textDecoration:"none"}}>
                <span className="logo">Ethiosocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchIcon" />
                <input placeholder ="Search for a friend, post or video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbariconItem">
                        <Person />
                        <span className = "topbariconBadge">1</span>
                    </div>
                    <div className="topbariconItem">
                        <Chat />
                        <span className = "topbariconBadge">1</span>
                    </div>
                    <div className="topbariconItem">
                        <Notifications />
                        <span className = "topbariconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture ? PF+user.profilePicture : PF+"nopfp.png"} alt="" className="topbarImg" />
                </Link>
            </div>
            
        </div>
    )
}