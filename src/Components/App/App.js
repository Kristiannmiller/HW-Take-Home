import './App.css';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';

import { brokerQuery } from '../../apiCalls';
import { useQuery } from '@apollo/client';


function App() {

  const { loading, error, data } = useQuery(brokerQuery);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <section className="app">
      <Header
        brokerName={data.mostRecentSnapshot.broker.name}
        brokerDes={data.mostRecentSnapshot.broker.description}/>
      <Navigation />
      <Dashboard />
    </section>
  );
};

export default App;
