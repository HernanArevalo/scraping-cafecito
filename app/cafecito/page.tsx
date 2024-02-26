"use client"
// import {getCafecitoData} from './helpers/getCafecitoData'
import styles from './alert.module.css'
import { Intro } from './components/Intro'
import { useState } from 'react'

interface Donation {
  donorName: string,
  donatedCoffees: string,
  message: string
}

export default function Cafecito() {

  const [lastDonation, setlastDonation] = useState<Donation>()


  // const asd = getCafecitoData();

  return (
    <div className={`${styles.alertContainer} `}>
      <Intro />
      
    </div>


  )
}
