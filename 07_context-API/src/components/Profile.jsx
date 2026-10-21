import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) return <div>Please login</div>;
    console.log("user", user);
    return <div>Welcom {user.userName}</div>;
};

export default Profile;
