import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Resources from "./components/Resources/Resources";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/features">
                        <Features />
                    </Route>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route path="/resources">
                        <Resources />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;
