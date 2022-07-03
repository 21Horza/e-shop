import "./global.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
