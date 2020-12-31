// react-router and react-router-dom logic goes here
// separate routes file will help in ssr later (if implemented)

import { Route, Redirect } from "react-router-dom";
import Sponsors from './components/sponsers/sponsers.js';

// import Legacy from "./pages/tirutsavaLegacy/TirutsavaLegacy";

function Routes() {
    return (
        <div>
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            
            <Route path="/sponsors" exact  component={Sponsors} />
            {/* <Route path="/aboutus" component={Legacy} /> */}
        </div>
    )
}

export default Routes;