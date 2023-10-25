/**import React, { useContext } from "react";
import ProfileCard from "./ProfileCard";
import { UserProfilesContext } from "../../../context/UserProfilesContext";
import ProfileForm from "./ProfileForm";

export default function ProfileView() {
  const { userProfiles } = useContext(UserProfilesContext);
  console.log("test", userProfiles);
  return (
    <div className="all-profiles-container">
      <h2 id="allprofiles-list-top"> Übersicht aller Profile: </h2>
      <div className="products-cards-Container">
        {userProfiles &&
          userProfiles.map((item, i) => <ProfileCard profile={item} key={i} />)}
      </div>
      <div className="profile-form-container">
        <ProfileForm />
      </div>
      <div div className="ankerlinks-container">
        <a className="ankerlinks" href="#allprofiles-list-top">
          back to the top
        </a>
      </div>
    </div>
  );
}*/
