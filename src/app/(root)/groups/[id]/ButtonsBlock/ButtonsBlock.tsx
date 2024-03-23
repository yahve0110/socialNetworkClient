import React from "react";
import styles from "./ButtonsBlock.module.css";

interface ButtonsType {
  setShowCreatePost: React.Dispatch<React.SetStateAction<boolean>>
  showCreatePost:boolean
  showCreateEvent:boolean
  setShowCreateEvent:React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonsBlock: React.FC<ButtonsType> = ({ setShowCreatePost,showCreatePost,showCreateEvent,setShowCreateEvent }) => {

  function showEventHidePost(){
    setShowCreateEvent(!showCreateEvent)
    setShowCreatePost(false)
  }

  function showPostHideEvent(){
    setShowCreateEvent(false)
    setShowCreatePost(!showCreatePost)
  }

  return (
    <div className={styles.btnsBlock}>
      <button onClick={() => showPostHideEvent()}>Create post</button>
      <button onClick={() => showEventHidePost()} >Create event</button>
    </div>
  );
};

export default ButtonsBlock;
