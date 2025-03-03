import { FiBell, FiMail } from "react-icons/fi";
import { Outlet, Link, useNavigate } from "react-router-dom";

import logo from "../../image/R (1).png";
const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="admin-dashboard">
        <nav className="admin-navbar">
          <Link to="/admin">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <div className="top-icons">
            <FiBell />
            <FiMail />
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/admin" className="side-menu-li">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/categoryForm" className="side-menu-li">
                  Category Form
                </Link>
              </li>
              <li>
                <Link to="/admin/blogerForm" className="side-menu-li">
                  Blogger Form
                </Link>
              </li>
              <li>
                <Link to="/admin/homeBlogForm" className="side-menu-li">
                  Home Blog Form
                </Link>
              </li>
              <li>
                <Link to="/admin/userInfo" className="side-menu-li">
                  User Information
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default AdminLayout;
