// react-router and react-router-dom logic goes here
// separate routes file will help in ssr later (if implemented)

import { Route, Redirect } from "react-router-dom";
import Sponsors from './pages/Sponsors/Sponsors';
import FAQs from './pages/Faqs/Faqs';
import ContactUs from './pages/ContactUs/ContactUs';
import Events from './pages/Events/EventsPage';
import HomePage from './pages/Homepage/Homepage';
import MerchPage from "./pages/Merch/Merch";
import ProshowsPage from "./pages/proshows/Proshows";

// import Legacy from "./pages/tirutsavaLegacy/TirutsavaLegacy";

function Routes() {
    return (
        <div>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route exact path="/home" exact component={HomePage}></Route>
            <Route path="/sponsors" exact  component={Sponsors} />
            <Route path="/faqs" exact component={FAQs} />
            <Route path="/contactus" exact  component={ContactUs} />
            <Route path="/events" component={Events} />
            <Route path="/merch" component={MerchPage} />
            <Route path="/proshows" component={ProshowsPage} />
            {/* <Route path="/aboutus" component={Legacy} /> */}
        </div>
    );
}

export default Routes;