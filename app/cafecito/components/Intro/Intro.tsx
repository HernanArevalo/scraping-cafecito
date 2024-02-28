"use client"
// import {getCafecitoData} from '../helpers/getCafecitoData'
import Image from 'next/image'
import styles from './intro.module.css'
import { useEffect, useRef, useState } from 'react'

export const Intro = () => {

  const [activeIntro, setActiveIntro] = useState(true)

  const introAudio = new Audio("/entrance-sound.mp3")
  
  const audioRef = useRef(introAudio);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    playAudio();

    
  }, []);

  audioRef.current.addEventListener('ended', () => { console.log('El audio ha terminado de reproducirse.') })
  

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .catch(error => {
          console.error('Error al reproducir audio:', error);
        });
    }
  };

  
  return (
<>
    <audio ref={audioRef} src="/entrance-sound.mp3" />
    {/* <button onClick={handlePlayAudio}>Reproducir sonido</button> */}
    { activeIntro &&

    <div className={styles.introDiv}>
        <Image
        className={`${styles.deadpoolEyes}`}
        src='/deadpool-eyes.png' 
        width='500' 
        height='500' 
        alt=''
        priority
        />
        <Image 
        className={`${styles.deadpoolLogo}`}
        src='/deadpool-500.png' 
        width='500' 
        height='500' 
        alt=''
        priority
        />
    </div>
      }
</>
  )
}
