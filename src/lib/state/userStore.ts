import { create } from "zustand";

type State = {
  userID: string;
  about: string;
  birth_date: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  avatar: string;
  username: string;
};

type Action = {
  updateUserID: (id: State["userID"]) => void;
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
  updateAbout: (about: State["about"]) => void;
  updateBirthDate: (birth_date: State["birth_date"]) => void;
  updateEmail: (email: State["email"]) => void;
  updateGender: (gender: State["gender"]) => void;
  updateAvatar: (avatar: State["avatar"]) => void;
  updateUsername: (username: State["username"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  userID: "", // Initialize userID with an empty string
  firstName: "John",
  lastName: "Doe",
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  birth_date: "00.00.0000",
  email: "test@test.com",
  gender: "Neutral",
  avatar:
    "https://res.cloudinary.com/djkotlye3/image/upload/v1711275268/zm3vbgtmcr7i4g1l2s4t.png",
  username: "",

  updateUserID: (id) => set(() => ({ userID: id })),
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  updateAbout: (about) => set(() => ({ about: about })),
  updateBirthDate: (birth_date) => set(() => ({ birth_date: birth_date })),
  updateEmail: (email) => set(() => ({ email: email })),
  updateGender: (gender) => set(() => ({ gender: gender })),
  updateAvatar: (avatar) => set(() => ({ avatar: avatar })),
  updateUsername: (username) => set(() => ({ username: username })),
}));
