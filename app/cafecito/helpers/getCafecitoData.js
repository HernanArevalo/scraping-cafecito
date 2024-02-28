import { chromium } from "playwright";

export const getCafecitoData = async (channel = "canvic") => {
  //console.log('getCafecitoData called');
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(`https://cafecito.app/${channel}`)

  await page.waitForSelector('.homeProfile_rightContainer__lm22m')

  const coffeeDonations = await page.$$('.homeProfile_rightContainer__lm22m .coffee_coffeeContainer__Xeycb')
  const lastDonation = coffeeDonations[0]

  // * donor
  const donorNameElement = await lastDonation.$('.coffee_name__93o6l')
  const donorName = donorNameElement ? await donorNameElement.innerText() : 'Anónimo'

  // * donation
  const donatedCoffeesElement = await lastDonation.$('.coffee_countCoffees__WQtss')
  const donatedCoffeesText = donatedCoffeesElement ? await donatedCoffeesElement.innerText() : null
  const donatedCoffees = donatedCoffeesText ? donatedCoffeesText.match(/\d+/)[0] : ''

  // * message
  let messageElement = await lastDonation.$('.coffee_text__fLzF1')
  if (messageElement == null) {
    messageElement = await lastDonation.$('.coffee_answer__YoEcE')
  }
  const message = messageElement ? await messageElement.innerText() : ''

  // * object with the info
  const donationInfo = {
    sender: donorName,
    amount: donatedCoffees,
    message: message
  }

  // * show the object
  //console.log(donationInfo)

  // * end conection
  await browser.close()

  return donationInfo
}