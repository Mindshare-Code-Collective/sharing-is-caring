/**import React, { useContext } from "react";
import { UserProfilesContext } from "../../../context/UserProfilesContext";

export default function ProfileForm() {
  const { userProfiles, setUserProfiles } = useContext(UserProfilesContext);
  return (
    <div className="userprofil-form">
      <h3>Add your User-Profil here:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserProfiles([
            ...userProfiles,
            {
              name: e.target.name.value,
              wohnort: e.target.wohnort.value,
              zustellung: e.target.zustellung.value,
              biete: e.target.biete.value,
              suche: e.target.suche.value,
            },
          ]);
        }}
      >
        <p>User-Name:</p>
        <input type={"text"} name="name" />
        <p>Wohnort:</p>
        <input type={"text"} name="wohnort" />
        <p>Zustellung:</p>
        <input type={"url"} name="zustellung" />
        <p>Biete:</p>
        <input type={"text"} name="biete" />
        <p>Suche:</p>
        <input type={"text"} name="suche" />
        <br></br>
        <button>add</button>
      </form>
    </div>
  );
}*/
