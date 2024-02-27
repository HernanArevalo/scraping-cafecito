import { Donation } from '../../page'
import styles from './message.module.css'

interface ChildProps {
  donation: Donation
}

export const Message = (props: ChildProps) => {

  const {sender, amount, message } = props.donation

  return (
    <div className={styles.messageDiv}
    >
      <p className={styles.title}>
        <span className={styles.sender}>{sender}</span>mandó <span className={styles.amount}>{amount}</span> cafecitos!
        
      </p>
      <p className={styles.message}>
        {message}

      </p>
    </div>
  )
}
