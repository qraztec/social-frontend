import "./online.css"
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarprofileimgContainer">
                <img className="rightbarprofileImg" src={PF+user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}
