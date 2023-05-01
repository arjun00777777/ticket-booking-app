import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h3>Have You Finished Signup</h3>
                <p>If Not</p>
                <h3>Let's Get Started</h3>
                <button required>
                  <Link to="signup">Signup</Link>
                </button>
              </li>
              <li className="nav-item">
                <h3>Hey Welcome to Book Your Favourite Movie Tickets</h3>
                <button>
                  <Link to="data">Recent</Link>
                </button>
              </li>
              <li className="nav-item">
                <h3>Want To Know About Us</h3>
                <button>
                  <Link to="Aboutus">About Us</Link>
                </button>
              </li>
              <li className="nav-item">
                <h3>Have Any Query Reach Us </h3>
                <button>
                  <Link to="Contactus">Contact Us</Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
