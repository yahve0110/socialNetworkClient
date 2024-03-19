"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from "./SignUp.module.css";
import avatar from "../../assets/imgs/avatar.png";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  gender: string;
  avatar: string;
  about: string;
}

export const SignUpUi: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    gender: 'Male', // default value
    avatar: '',
    about: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // вывод данных в консоль
    // здесь вы можете добавить логику отправки данных на сервер или другие действия
  };

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.loginForm}>
        <h2>Sign Up</h2>
        <div className={styles.underline}></div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputsContainer}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={"First Name"} />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={"Last Name"} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={"Email"} />
            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} placeholder={"Nickname"} autoComplete="off" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder={"Password"} autoComplete="off" />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder={"Confirm Password"} />
            <div>
              <label htmlFor="birthDate">Your birth day</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} placeholder={"BirthDate"} />
            </div>

            <div className={styles.selectWrapper}>
              <label htmlFor="gender">Your gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className={styles.Select}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <Image
                src="/assets/imgs/avatar.png"
                alt="avatar"
                width={100}
                height={100}
              />
            </div>
            <div>
              <button className={styles.avatarBtn}>Change avatar</button>
            </div>
          </div>
          <textarea name="about" value={formData.about} onChange={handleChange} placeholder={"Write about you"} className={styles.aboutTextarea} />
          <button type="submit" className={styles.loginBtn}>Register</button>
        </form>
      </div>
    </div>
  );
};
