import React from 'react'
import styles from "./DashBoard.module.css"

export default function DashBoard() {
  return (
    <div className={styles.main}>
      <h3>Hi AltWorld</h3>
      <hr />
    <div className={styles.dash}>
   
      <h3>  <i class="fa-solid fa-house"></i> DashBoard</h3>
    </div>
      <div className={styles.box}>
      <i class="fa-solid fa-plus"></i>
        <h2>New Assignments ?</h2>
        <p>Select from predefind questions to have a quick turnaround </p>
        <button>Create a new Assignment </button>
      </div>
    </div>
  )
}
