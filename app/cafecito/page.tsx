import { useEffect, useState } from 'react';
import styles from './alert.module.css'
import { Intro } from './components/Intro/Intro'
import { Message } from './components/Message/Message';
import { getCafecitoData } from './helpers/getCafecitoData';
import { CafecitoAlert } from './components/CafecitoAlert/CafecitoAlert';

export interface Donation {
  sender: string,
  amount: string,
  message: string
}

export default async function Cafecito() {

  const donationSample:Donation = {
    sender: 'MrMemo05',
    amount: '12',
    message: "mi humilde donación y la ultima hasta que no juguemos al rocket loco, me enojé pero te quiero dea "
  }

  let cafecitoData = await getCafecitoData();
  console.log(cafecitoData);

  return (
    <div className={`${styles.alertContainer} `}>
      <CafecitoAlert donation={cafecitoData}/>
      
      
    </div>
  )
}
