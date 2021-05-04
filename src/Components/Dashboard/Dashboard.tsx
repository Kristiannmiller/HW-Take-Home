import './Dashboard.css';
import ToggleMenu from '../ToggleMenu/ToggleMenu'
import BDCard from '../BDCard/BDCard'


function Dashboard() {
  return (
    <section className="dashboard">
      <ToggleMenu />
      <section className="titles">
        <h3>Broker Book</h3>
        <h3>Carrier Placement</h3>
      </section>
    </section>
  );
}

export default Dashboard;
