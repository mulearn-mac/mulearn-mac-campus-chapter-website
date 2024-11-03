import { Link } from "react-router-dom";
import imgTick from "../../../assets/img/mu-guide/tick.png";

function Header() {
  return (
    <div className="col-12 col-md-7 mx-auto timeline pt-0 my-0">
      <div className="timeline">
        <div className="outer">
          <div className="card ">
            <div className="info">
              <Link to="/joinus" className="text-decoration-none">
                <p className="fs-5 title pt-4">
                  <img className="tick" src={imgTick} alt="" />
                  Create μlearn account and join μlearn
                </p>
              </Link>
            </div>
          </div>

          <div className="card ">
            <div className="info">
              <Link to="/joinus" className="text-decoration-none">
                <p className="fs-5 title pt-4">
                  <img className="tick" src={imgTick} alt="" />
                  Join μLearn Discord Server
                </p>
              </Link>
            </div>
          </div>

          <div className="card ">
            <div className="info">
              <Link to="/joinus" className="text-decoration-none">
                <p className="fs-5 title pt-4">
                  <img className="tick" src={imgTick} alt="" />
                  Join Discord Server of our Campus Chapter
                </p>
              </Link>
            </div>
          </div>

          <div className="card ">
            <div className="info">
              <Link to="/joinus/guide" className="fs-5 title pt-4">
                <img className="tick" src={imgTick} alt="" />
                Get started with μlearn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
