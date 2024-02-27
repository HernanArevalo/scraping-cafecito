"use client"
import { useState } from 'react';
import styles from './alert.module.css'
import { Intro } from './components/Intro/Intro'
import { getCafecitoData } from './helpers/getCafecitoData';
import { Message } from './components/Message/Message';

export interface Donation {
  sender: string,
  amount: string,
  message: string
}

export default function Cafecito() {

  const [animationActive, setAnimationActive] = useState(true)

  // setInterval(()=>{
  //   setAnimationActive(!animationActive)
  //   console.log(animationActive);
  // }, 6000)

  const donation:Donation = {
    sender: 'MrMemo05',
    amount: '12',
    message: "mi humilde donación y la ultima hasta que no juguemos al rocket loco, me enojé pero te quiero dea "
  }

  return (
    <div className={`${styles.alertContainer} `}>
      <Message donation={donation}/>
      <Intro />
      
    </div>
  )
}
