import React from "react";
import Advert from "../Advert/advert";
import Navbar from "../Navbar/navbar";
import Search from "./Search/search";
import { DashboardContainer } from "./dashboardStyle";
import Navigation from "./Navigation/navigation";
import Allmissing from "./Allmissing/allmissing";
import Topmissing from "./Topmissing/topmissing";
import Hands from "./Hands/hands";
import Allfound from "./Allfound/allfound";
import Footer from "../Footer/footer";

const Dashboard = () => {
  // const [activeTab, setActiveTab] = useState(1);
  // const handleTabClick = (tabNumber) => {
  //   setActiveTab(tabNumber);
  // };
  return (
    <DashboardContainer>
      <Navbar />
      <Search />
      <Navigation />
      <Allmissing />
      <Topmissing />
      <Hands />
      <Allfound />
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;
