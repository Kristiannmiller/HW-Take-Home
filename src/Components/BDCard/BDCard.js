import './BDCard.css';
import {Doughnut, defaults} from 'react-chartjs-2';


function BDCard({ cardData }) {
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

	const createList = (list) => {
		let colors = [
			'#003D40',
			'#00CE5F',
			'#00E834',
			'#00E9CB'
		]
		return list.map((li, i) => {
			let color = colors[i]
			return (
				<li style={{color: color}}><span style={{color: '#6D7777'}}>{li}</span></li>
			)
		})
	}



  return (
    <section className="card">
      <article className="card-segment">
        <h4>{cardData.chartTitle}</h4>
				<section className="chart">
					<section className="legend">
						<ul>
							{createList(cardData.labels)}
						</ul>
					</section>
					<section className="chart-area">
		        <Doughnut
		          data={brokerChart}
		          options={options}
		        />
						<section className="select-data">
							<h6 className="info">03% || $13,470</h6>
							<h6 className="selection">Legend Title</h6>
						</section>
					</section>
        </section>
      </article>
      <article className="card-segment">
        <h4>{cardData.chartTitle}</h4>
				<section className="chart">
					<section className="legend">
						<ul>
							{createList(cardData.labels)}
						</ul>
					</section>
					<section className="chart-area">
		        <Doughnut
		          data={carrierChart}
		          options={options}
		        />
						<section className="select-data">
							<h6 className="info">03% || $13,470</h6>
							<h6 className="selection">Legend Title</h6>
						</section>
					</section>
        </section>
      </article>
    </section>
  );
}

export default BDCard;