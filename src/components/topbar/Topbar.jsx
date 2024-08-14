import "./topbar.css"
import {Search} from "@material-ui/icons"
import {Person, Chat, Notifications} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Ethiosocial</span>
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
                <img src="/assets/Photos/1.jpg.webp" alt="" className="topbarImg" />
            </div>
            
        </div>
    )
}