import "./sidebar.css"
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmark, Help, Work, Event, School} from "@material-ui/icons"
import {Users} from "../../dummyData.js"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Feed</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Chats</span>
                    </li>
                    <li className="sidebarlistItem">
                        <PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Videos</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Groups</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Bookmarks</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Help className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Questions</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Jobs</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Events</span>
                    </li>
                    <li className="sidebarlistItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarlistitemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="slidebarfriendList">
                    {Users.map(u => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}