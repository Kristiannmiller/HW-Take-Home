import './ToggleMenu.css';

function ToggleMenu({ adjustOptions, selected }) {

  const handleClick = (choice) => {
    adjustOptions(choice)
  };

  return (
    <section className="toggle-menu">
      <button onClick={() => handleClick("premium")}
      className={selected.premium ? "toggle-option active" : "toggle-option"}>Premium Range</button>
      <button onClick={() => handleClick("markets")}
      className={selected.markets ? "toggle-option active" : "toggle-option"}>Markets</button>
      <button onClick={() => handleClick("industries")}
      className={selected.industries ? "toggle-option active" : "toggle-option"}>Industries</button>
      <button onClick={() => handleClick("products")}
      className={selected.products ? "toggle-option active" : "toggle-option"}>Products</button>
    </section>
  );
};

export default ToggleMenu;
