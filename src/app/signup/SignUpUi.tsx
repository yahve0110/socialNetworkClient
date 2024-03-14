import styles from "./SignUp.module.css"
import avatar from "../../assets/imgs/avatar.png"
import Image from "next/image"

export const SignUpUi = () => {
  return (
    <div className={styles.signupWrapper}>
      <div className={styles.loginForm}>
        <h2>Sign Up</h2>
        <div className={styles.underline}></div>
        <div className={styles.inputsContainer}>
          <div>
            <Image
              src="/assets/imgs/avatar.png"
              alt="avatar"
              width={80}
              height={80}
            />
            <div>
              <button className={styles.avatarBtn}>Change avatar</button>
            </div>
            <input type="text" placeholder={"Nickname"} />
            <textarea placeholder={"Write about you"} />
            <p className={styles.genderHeading}>Your gender</p>
            <div className="select-wrapper">
              <select className={styles.Select}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <input type="email" placeholder={"Email"} />
            <input type="text" placeholder={"First Name"} />
            <input
              className={styles.secondName}
              type="text"
              placeholder={"Second Name"}
            />
            <input
              className={styles.passwordInput}
              type="password"
              placeholder={"Password"}
            />
            <div className={styles.birthInput}>
              <p>Your date of birth</p>
              <input type="date" placeholder={"Password"} />
            </div>
          </div>
        </div>

        <button className={styles.loginBtn}>Register</button>
      </div>
    </div>
  )
}
