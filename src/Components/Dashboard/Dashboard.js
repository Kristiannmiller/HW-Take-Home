import './Dashboard.css';
import ToggleMenu from '../ToggleMenu/ToggleMenu'
import BDCard from '../BDCard/BDCard'
import { brokerQuery } from '../../apiCalls';
import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';



function Dashboard() {

  const [premiumMenu, setPremiumMenu] = useState(false);
  const [marketsMenu, setMarketsMenu] = useState(false);
  const [industriesMenu, setIndustriesMenu] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);

  const adjustOptions = (optionToChange) => {
    optionToChange === "premium" && setPremiumMenu(!premiumMenu)
    optionToChange === "markets" && setMarketsMenu(!marketsMenu)
    optionToChange === "industries" && setIndustriesMenu(!industriesMenu)
    optionToChange === "products" && setProductsMenu(!productsMenu)
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
        <BDCard />
      </section>
    </section>
  );
}

export default Dashboard;
