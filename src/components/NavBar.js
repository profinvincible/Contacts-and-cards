import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const router = useLocation();
  const routesNotToShowNavBar = ["/aboutus", "/lorem", "/signup"];
  //Include routes where you do not want the navbar to show, in this array.
  if (routesNotToShowNavBar.includes(router.pathname)) {
    return null;
  }
  return (
    <section className=" Navlinks text-bg-secondary p-3">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
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
              <Link to="signup">
                <button className="SubmitIt" type="submit">
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navlinks;


//  export function Navbr() {
//   let [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     window.addEventListener("resize", () => setWidth(window.innerWidth));
//   });
//   return (
//     <div className="nav-container">
//       {width <= 699 ? <NavBar /> : <NavBar />}
//     </div>
//   );
// }