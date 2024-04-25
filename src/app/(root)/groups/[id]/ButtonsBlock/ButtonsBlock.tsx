import React, { useState } from "react";
import styles from "./ButtonsBlock.module.css";

interface ButtonsType {
  setShowCreatePost: React.Dispatch<React.SetStateAction<boolean>>
  showCreatePost: boolean
  showCreateEvent: boolean
  setShowCreateEvent: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonsBlock: React.FC<ButtonsType> = ({ setShowCreatePost, showCreatePost, showCreateEvent, setShowCreateEvent }) => {
  const [selectedButton, setSelectedButton] = useState("");

  function showEventHidePost() {
    setShowCreateEvent(!showCreateEvent);
    setShowCreatePost(false);
    setSelectedButton("create-event");
  }

  function showPostHideEvent() {
    setShowCreateEvent(false);
    setShowCreatePost(!showCreatePost);
    setSelectedButton("create-post");
  }

  return (
    <div className={styles.btnsBlock}>
      <button className={selectedButton === "create-post" ? styles.selected : ""} onClick={() => showPostHideEvent()}>Create post</button>
      <button className={selectedButton === "create-event" ? styles.selected : ""} onClick={() => showEventHidePost()} >Create event</button>
    </div>
  );
};

export default ButtonsBlock;
