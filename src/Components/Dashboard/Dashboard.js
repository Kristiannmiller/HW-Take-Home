import './Dashboard.css';
import ToggleMenu from '../ToggleMenu/ToggleMenu'
import BDCard from '../BDCard/BDCard'
import { brokerCarrierQuery } from '../../apiCalls';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';



function Dashboard() {

  const [premiumMenu, setPremiumMenu] = useState(false);
  const [marketsMenu, setMarketsMenu] = useState(false);
  const [industriesMenu, setIndustriesMenu] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);

  const { loading, error, data } = useQuery(brokerCarrierQuery);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  const adjustOptions = (optionToChange) => {
    optionToChange === "premium" && setPremiumMenu(!premiumMenu)
    optionToChange === "markets" && setMarketsMenu(!marketsMenu)
    optionToChange === "industries" && setIndustriesMenu(!industriesMenu)
    optionToChange === "products" && setProductsMenu(!productsMenu)
  }

  const createCard = (cardInfo) => {
    return(
      <BDCard
        cardData={cardInfo}
      />
    )
  }

  const premiumCard = () => {
    let labels = data.mostRecentSnapshot.brokerSlice.premiumRange.map(range => range.title)
    let brokerNums = data.mostRecentSnapshot.brokerSlice.premiumRange.map(range => Math.round(range.proportion))
    let carrierNums = data.mostRecentSnapshot.carrierSlice.premiumRange.map(range => Math.round(range.proportion))
    let brokerVals = data.mostRecentSnapshot.brokerSlice.premiumRange.map(range => range.premium)
    let carrierVals = data.mostRecentSnapshot.carrierSlice.premiumRange.map(range => range.premium)
    return {labels, brokerNums, brokerVals, carrierNums, carrierVals, chartTitle: 'Premium Range'}
  }

  const marketsCard = () => {
    let labels = data.mostRecentSnapshot.brokerSlice.brokerDivision.map(range => range.title)
    let brokerNums = data.mostRecentSnapshot.brokerSlice.brokerDivision.map(range => Math.round(range.proportion))
    let carrierNums = data.mostRecentSnapshot.carrierSlice.brokerDivision.map(range => Math.round(range.proportion))
    let brokerVals = data.mostRecentSnapshot.brokerSlice.brokerDivision.map(range => range.premium)
    let carrierVals = data.mostRecentSnapshot.carrierSlice.brokerDivision.map(range => range.premium)
    return {labels, brokerNums, brokerVals, carrierNums, carrierVals, chartTitle: 'Markets'}
  }

  const industriesCard = () => {
    let labels = data.mostRecentSnapshot.brokerSlice.industries.map(range => range.title)
    let brokerNums = data.mostRecentSnapshot.brokerSlice.industries.map(range => Math.round(range.proportion))
    let carrierNums = data.mostRecentSnapshot.carrierSlice.industries.map(range => Math.round(range.proportion))
    let brokerVals = data.mostRecentSnapshot.brokerSlice.industries.map(range => range.premium)
    let carrierVals = data.mostRecentSnapshot.carrierSlice.industries.map(range => range.premium)
    return {labels, brokerNums, brokerVals, carrierNums, carrierVals, chartTitle: 'Industries'}
  }

  const productsCard = () => {
    let labels = data.mostRecentSnapshot.brokerSlice.products.map(range => range.title)
    let brokerNums = data.mostRecentSnapshot.brokerSlice.products.map(range => Math.round(range.proportion))
    let carrierNums = data.mostRecentSnapshot.carrierSlice.products.map(range => Math.round(range.proportion))
    let brokerVals = data.mostRecentSnapshot.brokerSlice.products.map(range => range.premium)
    let carrierVals = data.mostRecentSnapshot.carrierSlice.products.map(range => range.premium)
    return {labels, brokerNums, brokerVals, carrierNums, carrierVals, chartTitle: 'Products'}
  }

  return (
    <section className="dashboard">
      <ToggleMenu
        adjustOptions={adjustOptions}
        selected={{
          premium: premiumMenu,
          markets: marketsMenu,
          industries: industriesMenu,
          products: productsMenu}}
      />
      <section className="titles">
        <h3>Broker Book</h3>
        <h3>Carrier Placement</h3>
      </section>
      <section className="cards">
        {premiumMenu && createCard(premiumCard())}
        {marketsMenu && createCard(marketsCard())}
        {industriesMenu && createCard(industriesCard())}
        {productsMenu && createCard(productsCard())}
      </section>
    </section>
  );
}

export default Dashboard;
