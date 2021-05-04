import './Header.css';
import arrow from '../../Assets/BackArrow.png';
import bell from '../../Assets/Bell.png';
import user from '../../Assets/user.png';

function Header() {
  return (
    <header>
      <section className="header-nav">
        <img className="arrow" src={arrow} title="navigate back" alt="navigate back to main page"/>
        <section className="user-data">
          <h5>Elwin Sharvin</h5>
          <img className="user" src={user} title="user image" alt="user"/>
          <img className="bell" src={bell} title="user settings" alt="adjust user settings"/>
        </section>
      </section>
      <section className="broker-data">
        <h2>Broker Name</h2>
        <article className="broker-context">
          <p><span className="data-title">Website</span>www.website.com</p>
          <p><span className="data-title">Summary</span>Travelers is the second largest writer of U.S. commercial property casualty insurace and the third largest writer of U.S. personal insurance through independent agents.</p>
        </article>
      </section>
    </header>
  );
}

export default Header;
