import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return <div>
    <Header />
    <di className="p-12">
      <div className="max-w-[1344px] mx-auto  ">
        <Navbar />
      </div>
    </di>
    <Footer />
  </div>;
}

export default App;
