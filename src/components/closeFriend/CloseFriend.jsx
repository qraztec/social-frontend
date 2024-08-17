import "./closeFriend.css"

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img className="sidebarfriendImg" src={PF+user.profilePicture} alt="" />
            <span className="sidebarfriendName">{user.username}</span>
        </li>
    )
}
