import { useState, createContext, useEffect } from "react";

export const UserProfilesContext = createContext();

export const starterUserProfiles = [
  {
    name: "John",
    //image: "http://
    Wohnort: "Berlin",
    Zustellung: "nur Abholung",
    Biete: "xyz",
    Suche: "abc",
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
      {children}
    </UserProfilesContext.Provider>
  );
}
