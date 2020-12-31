// react-router and react-router-dom logic goes here
// separate routes file will help in ssr later (if implemented)

import { Route, Redirect } from "react-router-dom";

// import Legacy from "./pages/tirutsavaLegacy/TirutsavaLegacy";

function Routes() {
    return (
        <div>
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>

            {/* <Route path="/aboutus" component={Legacy} /> */}
        </div>
    )
}

export default Routes;