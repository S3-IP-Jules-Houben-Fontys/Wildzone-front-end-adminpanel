import React from "react";
import { useAuth0} from "@auth0/auth0-react";

export const Profile = () => {
    const {user}= useAuth0();
  return (
      <h1>Hello { user == undefined ? "mysterious being" : user.name }!</h1>
  );
};

export default Profile;