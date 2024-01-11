import calc from "../assets/calculator.png";

const Header = () => {
  return (
    <header>
      <img src={calc} alt="calculator" />
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
