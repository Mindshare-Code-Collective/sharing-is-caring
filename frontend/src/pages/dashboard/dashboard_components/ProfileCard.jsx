import React from "react";

export default function ProfileCard({ userProfile }) {
  return (
    <div clasName="userprofile-card">
      <div className="text">
        <h2>{userProfile.name}</h2>
        <div>
          <span>
            <b> Wohnort:</b> {userProfile.wohnort}
          </span>
        </div>
        <div>
          <span>
            <b>Zustellung:</b>
            {userProfile.zustellung}
          </span>
        </div>
        <div>
          <span>
            <b>Biete:</b>
            {userProfile.biete}
          </span>
        </div>
        <div>
          <span>
            <b>Suche:</b>
            {userProfile.suche}
          </span>
        </div>
      </div>
    </div>
  );
}
