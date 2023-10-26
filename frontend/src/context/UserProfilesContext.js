import { useState, createContext, useEffect } from "react";

export const UserProfilesContext = createContext();

export const starterUserProfiles = [
  {
    name: "John",
    //image: "http://
    wohnort: "Berlin",
    zustellung: "nur Abholung",
    biete: "xyz",
    suche: "abc",
  },
];

const getStarterUserProfiles = () => {
  const userProfiles = localStorage.getItem("userProfiles");
  return userProfiles ? JSON.parse(userProfiles) : starterUserProfiles;
};

export default function UserProfilesContextProvider({ children }) {
  const [userProfiles, setUserProfiles] = useState(() =>
    getStarterUserProfiles()
  );
  useEffect(() => {
    localStorage.setItem("userProfiles", JSON.stringify(userProfiles));
  }, [userProfiles]);
  return (
    <UserProfilesContext.Provider value={{ userProfiles, setUserProfiles }}>
      {console.log(userProfiles)};{children}
    </UserProfilesContext.Provider>
  );
}
