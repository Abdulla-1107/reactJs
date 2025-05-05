import "./brands.css";
import appleWatch from "../../images/apple.png";
import xiaomiWatch from "../../images/xiaomi.png";
import fitbitWatch from "../../images/fitbit.png";


const Brands = () => {
    return (
      <div className="brands">
        <div className="container brand-list">
          <div className="brand-card">
            <img src={appleWatch} alt="Apple" />
            <div className="brand-text">
              <h3>Apple</h3>
              <p>Apple is one of the most famous smart watches providing company.</p>
            </div>
          </div>
          <div className="brand-card">
            <img src={xiaomiWatch} alt="Xiaomi" />
            <div className="brand-text">
              <h3>Xiaomi</h3>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </div>
          <div className="brand-card">
            <img src={fitbitWatch} alt="Fitbit" />
            <div className="brand-text">
              <h3>FitBit</h3>
              <p>Fitbit smart watches are best for their health and fitness features.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Brands;
