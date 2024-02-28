"use client"
import { useState } from "react"
import { Intro } from "../Intro/Intro"
import { Message } from "../Message/Message"
import { Donation } from "../../page"

interface ChildProps {
  donation: Donation
}

export const CafecitoAlert = (props:ChildProps) => {

	const {donation} = props
	console.log(donation.sender);
	const [lastDonation, setlastDonation] = useState<Donation>(donation)

  return (
    <>
      <Message donation={lastDonation}/>
      <Intro />
    </>
  )
}
