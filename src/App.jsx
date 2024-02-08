import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Home/PageHome";
import ScrollToTop from "./TopOfPage/ScrollPageToTop";

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
