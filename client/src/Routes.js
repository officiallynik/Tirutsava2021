// react-router and react-router-dom logic goes here
// separate routes file will help in ssr later (if implemented)

import { Route, Redirect } from "react-router-dom";
import Sponsors from './pages/Sponsors/Sponsors';
import FAQs from './pages/Faqs/Faqs';
import ContactUs from './pages/ContactUs/ContactUs';

// import Legacy from "./pages/tirutsavaLegacy/TirutsavaLegacy";

function Routes() {
    return (
        <div>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route path="/sponsors"  component={Sponsors} />
            <Route path="/faqs"  component={FAQs} />
            <Route path="/contactus"  component={ContactUs} />
            {/* <Route path="/aboutus" component={Legacy} /> */}
        </div>
    );
}

export default Routes;