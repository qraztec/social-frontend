import "./closeFriend.css"

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarfriendImg" src={user.profilePicture} alt="" />
            <span className="sidebarfriendName">{user.username}</span>
        </li>
    )
}
