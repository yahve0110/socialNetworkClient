import { useEffect, useState } from "react"
import styles from "./GroupEvent.module.css"
import Image from "next/image"

export default function GroupEvent() {
  const [userVoted, setUserVoted] = useState(false)
  const [votingData, setVotingData] = useState({
    goingNr: 10,
    notGoingNr: 5,
  })

  function checkVote(selectedOption: string) {
    if (selectedOption) {
      if (selectedOption === "going") {
        setVotingData((prevData) => ({
          ...prevData,
          goingNr: prevData.goingNr + 1,
        }))
      } else {
        setVotingData((prevData) => ({
          ...prevData,
          notGoingNr: prevData.notGoingNr + 1,
        }))
      }
      setUserVoted(true)
    } else {
      alert("Please select an option before voting.")
    }
  }

  useEffect(() => {
    // Calculate the total votes
    const totalVotes = votingData.goingNr + votingData.notGoingNr

    // Calculate progress percentages
    const goingProgress = (votingData.goingNr / totalVotes) * 100
    const notGoingProgress = (votingData.notGoingNr / totalVotes) * 100

    // Set the progress state
    setGoingProgress(goingProgress)
    setNotGoingProgress(notGoingProgress)
  }, [votingData])

  const [goingProgress, setGoingProgress] = useState(0)
  const [notGoingProgress, setNotGoingProgress] = useState(0)

  return (
    <div className={styles.eventContainer}>
      <div className={styles.eventUpper}>
        <div className={styles.eventAuthor}>
          <Image
            src="/assets/imgs/avatar.png"
            alt="avatar"
            width={20}
            height={20}
          />
          <p>Ilya Skorokhodov</p>
        </div>
        <div className={styles.dateTime}>
          <p className={styles.eventDate}>13.03.24 :</p>
          <p className={styles.eventTime}>15:26 </p>
        </div>
      </div>
      <h2>Rock concert</h2>
      <p className={styles.eventAbout}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        necessitatibus offic cupiditate libero quod ex exercitationem asperiores
        ullam.
      </p>

      <Image
        className={styles.eventImg}
        src="https://media.istockphoto.com/id/1391884768/vector/alternative-band-musicians-concert-with-crowd-silhouettes.jpg?s=612x612&w=0&k=20&c=vzy4deVEqBKVAGXuo5H_Bl2h9khJTq_dO2vNl_uFGCQ="
        alt="rock"
        width={300}
        height={300}
      />
      <h3 className={styles.question}>Will you go?</h3>

      {!userVoted && (
        <div>
          <div className={styles.votingBlock}>
            <button onClick={() => checkVote("going")} value="going">
             Yes
              <Image
                src="/assets/icons/ok.svg"
                alt="rock"
                width={16}
                height={16}
              />
            </button>
            <button onClick={() => checkVote("notGoing")} value="notGoing">
              No
              <Image
                src="/assets/icons/notok.svg"
                alt="rock"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      )}

      {userVoted && (
        <div>
          <div className={styles.goingProgress}>
            <div className={styles.goingUsersNr}>
              Accepted: {votingData.goingNr}
            </div>
            <div
              className={styles.goingProgressFill}
              style={{ width: `${goingProgress}%` }}
            ></div>
            <p>{goingProgress.toFixed()}%</p>
          </div>
          <div className={styles.notGoingProgress}>
            <div className={styles.notGoingUsersNr}>
              Refused: {votingData.notGoingNr}
            </div>
            <div
              className={styles.notGoingProgressFill}
              style={{ width: `${notGoingProgress}%` }}
            ></div>
            <p>{notGoingProgress.toFixed()}%</p>
          </div>
        </div>
      )}
    </div>
  )
}
