import "./app.scss";
import "./index.css";
import Main from "./components/Main";
import Merch from "./components/merch/Merch";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Admin from "./components/admin/Admin";
import Campaign from "./components/admin/Campaign";
import Update from "./components/admin/Update";
import Add from "./components/admin/Add";
import ThemeProvider from "./utils/ThemeContext";
import ScrollToSection from "./ScrollToSection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/auth/Login";
import { UserProvider } from "./components/auth/userContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <UserProvider>

          <Router>
            <div className="main">
              <ScrollToSection />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/*" element={<Main />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/faqs" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/dashboard" element={<Admin />} />
                <Route path="/admin/campaign" element={<Campaign />} />
                <Route path="/admin/add" element={<Add />} />
                <Route path="/admin/campaign/:campaignId" element={<Update />} />
                <Route path="/auth/*" element={<Login />} />
              </Routes>
            </div>
          </Router>

        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
