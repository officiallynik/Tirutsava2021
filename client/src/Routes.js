// react-router and react-router-dom logic goes here
// separate routes file will help in ssr later (if implemented)

import { Route, Redirect } from "react-router-dom";
import Sponsors from './components/sponsers/sponsers.js';

// import Legacy from "./pages/tirutsavaLegacy/TirutsavaLegacy";
import Homepage from './pages/Homepage/Homepage';

function Routes() {
    return (
        <div>
            <Route exact path="/">
                <Redirect to="/Home" exact component={Homepage}/>
            </Route>
            <Route path="/sponsors" exact  component={Sponsors} />
            <Route path="/Home" exact  component={Homepage} />
            {/* <Route path="/aboutus" component={Legacy} /> */}
        </div>
    )
}

export default Routes;