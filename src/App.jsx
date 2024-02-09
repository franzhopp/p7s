import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Home/PageHome.jsx";
import ScrollToTop from "./Components/TopOfPage/ScrollPageToTop.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
