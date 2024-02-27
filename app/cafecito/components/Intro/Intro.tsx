"use client"
// import {getCafecitoData} from '../helpers/getCafecitoData'
import Image from 'next/image'
import styles from './intro.module.css'
import { useEffect, useRef, useState } from 'react'

export const Intro = () => {

  const [activeIntro, setActiveIntro] = useState(true)

  const introAudio = new Audio("/entrance-sound.mp3")
  
  // const donation = await getCafecitoData("canvic")
  // console.log(donation);

  const audioRef = useRef(introAudio);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    playAudio();

    
  }, []);
  const handleAudioEnded = () => {
    console.log('El audio ha terminado de reproducirse.');
    // Puedes realizar acciones adicionales aquí después de que el audio haya terminado
  };

  // Agregar el evento "ended" al elemento de audio
  audioRef.current.addEventListener('ended', handleAudioEnded);
  

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
        alt=''/>
        <Image 
        className={`${styles.deadpoolLogo}`}
        src='/deadpool-500.png' 
        width='500' 
        height='500' 
        alt=''/>
    </div>
      }
</>
  )
}
