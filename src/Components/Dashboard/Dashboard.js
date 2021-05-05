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

  // --- DISPLAY FUNCTIONS --- //
  const displayCard = (cardInfo) => {
    return(
      <BDCard
        cardData={cardInfo}
      />
    )
  }

  // --- HELPER FUNCTIONS --- //
  const createCard = (dataSection, title) => {
    let labels = data.mostRecentSnapshot.brokerSlice[dataSection].map(range => range.title)
    let brokerNums = data.mostRecentSnapshot.brokerSlice[dataSection].map(range => Math.round(range.proportion))
    let carrierNums = data.mostRecentSnapshot.carrierSlice[dataSection].map(range => Math.round(range.proportion))
    let brokerVals = data.mostRecentSnapshot.brokerSlice[dataSection].map(range => range.premium)
    let carrierVals = data.mostRecentSnapshot.carrierSlice[dataSection].map(range => range.premium)
    return {labels, brokerNums, brokerVals, carrierNums, carrierVals, chartTitle: title}
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
        {premiumMenu && displayCard(createCard('premiumRange', 'Premium Range'))}
        {marketsMenu && displayCard(createCard('brokerDivision', 'Markets'))}
        {industriesMenu && displayCard(createCard('industries', 'Industries'))}
        {productsMenu && displayCard(createCard('products', 'Products'))}
      </section>
    </section>
  );
}

export default Dashboard;
