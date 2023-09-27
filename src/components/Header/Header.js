import logo from "../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";
function Header() {
  return (
    //return header
    <div>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}
export default Header;
