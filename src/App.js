import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Statistics from "./components/Statistics/Statistics";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Statistics />
			<CtaSection />
			<Footer />
		</>
	);
}

export default App;
