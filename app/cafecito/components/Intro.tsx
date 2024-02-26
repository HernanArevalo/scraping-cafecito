import {getCafecitoData} from '../helpers/getCafecitoData'
import Image from 'next/image'
import styles from './intro.module.css'

export const Intro = () => {

  const introAudio = new Audio("/entrance-sound.mp3")
  

  const donation = getCafecitoData("canvic")

  
  return (
<>
    <h1>asd</h1>
    <button></button>
    <div className={styles.introDiv}>
        <Image
        className={`${styles.deadpoolEyes}`}
        src='/deadpool-eyes.png' 
        width='500' 
        height='500' 
        alt=''/>
        <Image 
        className={`${styles.deadpoolLogo}`}
        src='/deadpool-500.png' 
        width='500' 
        height='500' 
        alt=''/>
    </div>
</>
  )
}
