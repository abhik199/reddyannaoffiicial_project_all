import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./main_component/Layout";
import Home from "./component/Home";
import Service from "./component/Service";
import About from "./component/About";
import Sport from "./component/Sport";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import TermsAndConditions from "./component/TermsAndConditions";
import Disclaimer from "./component/Disclaimer";
import Cricket from "./service_componet/Cricket";
import Football from "./service_componet/Football";
import Tennis from "./service_componet/Tennis";
import Horse_race from "./service_componet/Horse_race";
import India_card from "./service_componet/Indian_Card";
import Casino from "./service_componet/Casino";
import ReddyAnnaLogin from "./service_componet/ReddyAnnaLogin";
import Blog from "./component/Blog";
// ✅ Admin Panel
import AdminLayout from "./AdminPannel/AdminComponent/AdminLayout";
import Login from "./AdminPannel/AdminComponent/Login";
import AdminDashboard from "./AdminPannel/AdminComponent/AdminDashboard";
import ProtectedRoute from "./AdminPannel/AdminComponent/ProtectedRoute";
import BlogerForm from "./AdminPannel/AdminComponent/BlogerForm";
import HomeBlogForm from "./AdminPannel/AdminComponent/HomeBlogFrom";
import UserInfoTable from "./AdminPannel/AdminComponent/UserInfoTable";
import IPLPage from "./component/IPLPage";
import BBLPage from "./component/Bbl";
import CPLPage from "./component/Cpl";
import CategoryForm from "./AdminPannel/AdminComponent/CategoryForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            {/* --------------------------blog details pages link----------------------- */}
            <Route path="/home/iplpage" element={<IPLPage />} />
            <Route path="/home/bblpage" element={<BBLPage />} />
            <Route path="/home/cplpage" element={<CPLPage />} />

            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="sport" element={<Sport />} />
            <Route path="contact" element={<Contact />} />
            <Route path="policy" element={<Policy />} />
            <Route path="termsAndcondition" element={<TermsAndConditions />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="cricket" element={<Cricket />} />
            <Route path="football" element={<Football />} />
            <Route path="tennis" element={<Tennis />} />
            <Route path="horseRace" element={<Horse_race />} />
            <Route path="indianCard" element={<India_card />} />
            <Route path="casino" element={<Casino />} />
            <Route path="reddyAnnalogin" element={<ReddyAnnaLogin />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="/login" element={<Login />} />

          {/* ✅ Admin Panel - All routes inside are protected */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="categoryForm" element={<CategoryForm />} />
            <Route path="blogerForm" element={<BlogerForm />} />
            <Route path="homeBlogForm" element={<HomeBlogForm />} />
            <Route path="userInfo" element={<UserInfoTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
