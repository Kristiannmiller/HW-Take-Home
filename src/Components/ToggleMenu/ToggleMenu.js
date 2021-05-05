import './ToggleMenu.css';

function ToggleMenu({ adjustOptions, selected }) {

  const handleClick = (choice) => {
    adjustOptions(choice)
  }

  return (
    <section className="toggle-menu">
      <a onClick={() => handleClick("premium")}
      className={selected.premium ? "toggle-option active" : "toggle-option"}>Premium Range</a>
      <a onClick={() => handleClick("markets")}
      className={selected.markets ? "toggle-option active" : "toggle-option"}>Markets</a>
      <a onClick={() => handleClick("industries")}
      className={selected.industries ? "toggle-option active" : "toggle-option"}>Industries</a>
      <a onClick={() => handleClick("products")}
      className={selected.products ? "toggle-option active" : "toggle-option"}>Products</a>
    </section>
  );
}

export default ToggleMenu;
