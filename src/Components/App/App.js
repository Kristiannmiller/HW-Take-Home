import './App.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Dashboard from '../Dashboard/Dashboard'

function App() {
  return (
    <section className="app">
      <Header />
      <Navigation />
      <Dashboard />
    </section>
  );
}

export default App;
