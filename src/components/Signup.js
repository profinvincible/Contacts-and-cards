// import pixelu from "../images";
import { Link } from "react-router-dom";
// import { Link } from "module";

export const Links = () => {
  return (
    <section className="Links">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lorem" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <Link to="./lorem"> */}
              <button className="ReadMore" type="submit">
                Search
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
};

const Signup = () => {
  return (
    <section className="Signup sticky-bottom">
      <div className="container">
        <div className="col-12">
          <h1>Name: Muoghalu Ijeoma</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>Name: Muoghalu John</h1>
          <h1>
            Name: Muoghalu <Link to="/">John</Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Signup;
