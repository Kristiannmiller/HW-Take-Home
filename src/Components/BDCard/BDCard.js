import './BDCard.css';
import { Doughnut } from 'react-chartjs-2';
import React, { useState } from 'react';


function BDCard({ cardData }) {

  const [brokerOption, setBrokerOption] = useState(cardData.labels[0]);
  const [carrierOption, setCarrierOption] = useState(cardData.labels[0]);

  const changeOption = (li, isBroker) => {
    isBroker ? setBrokerOption(li) : setCarrierOption(li)
  }

  const brokerChart = {
    labels: cardData.labels,
    datasets: [
      {
				border: 'none',
        backgroundColor: [
          '#003D40',
          '#00CE5F',
          '#00E834',
          '#00E9CB'
        ],
        data: cardData.brokerNums,
				borderWidth: '0'
      }
    ]
  }
  const carrierChart = {
    labels: cardData.labels,
    datasets: [
      {
				border: 'none',
        backgroundColor: [
          '#003D40',
          '#00CE5F',
          '#00E834',
          '#00E9CB'
        ],
        data: cardData.carrierNums,
				borderWidth: '0'
      }
    ]
  }
  const options = {
		layout: {
			padding: 0,
			margin: 50,
			height: '500px'
		},
		cutout: 65,
		borderWidth: '0',
		responsive: true,
		plugins: {
			legend:{
				display:false,
				position:'left',
			}
		}
	}

	const createList = (list, isBroker) => {
		let colors = [ '#003D40', '#00CE5F', '#00E834', '#00E9CB' ]
		return list.map((li, i) => {
			let color = colors[i]
			if(isBroker && li === brokerOption || !isBroker && li === carrierOption) {
        return (
          <li onClick={(event) => changeOption(li, isBroker)} style={{color: color}}>
          <span style={{color: '#6D7777'}}><strong>{li}</strong></span>
          </li>
			)} else {
        return (
          <li onClick={(event) => changeOption(li, isBroker)} style={{color: color}}>
          <span style={{color: '#6D7777'}}>{li}</span>
          </li>
        )
      }
		})
	}

  const displayOptionData = (isBroker) => {
    if(isBroker) {
      let index = cardData.labels.findIndex(label => label === brokerOption)
      let percentage = cardData.brokerNums[index]
      let value = cardData.brokerVals[index]
      return `${percentage}% || $${value}`
    } else {
      let index = cardData.labels.findIndex(label => label === carrierOption)
      let percentage = cardData.carrierNums[index]
      let value = cardData.carrierVals[index]
      return `${percentage}% || $${value}`
    }
  }

  return (
    <section className="card">
      <article className="card-segment">
        <h4>{cardData.chartTitle}</h4>
				<section className="chart">
					<section className="legend">
						<ul>
							{createList(cardData.labels, true)}
						</ul>
					</section>
					<section className="chart-area">
		        <Doughnut
		          data={brokerChart}
		          options={options}
		        />
						<section className="select-data">
							<h6 className="info">{displayOptionData(true)}</h6>
							<h6 className="selection">{brokerOption}</h6>
						</section>
					</section>
        </section>
      </article>
      <article className="card-segment">
        <h4>{cardData.chartTitle}</h4>
				<section className="chart">
					<section className="legend">
						<ul>
							{createList(cardData.labels, false)}
						</ul>
					</section>
					<section className="chart-area">
		        <Doughnut
		          data={carrierChart}
		          options={options}
		        />
						<section className="select-data">
							<h6 className="info">{displayOptionData(false)}</h6>
							<h6 className="selection">{carrierOption}</h6>
						</section>
					</section>
        </section>
      </article>
    </section>
  );
}

export default BDCard;
