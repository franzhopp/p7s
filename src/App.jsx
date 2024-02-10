import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/TopOfPage/ScrollPageToTop.jsx";
import Homepage from "./Home/PageHome.jsx";
import PageNotFound from "./Page/Error/PageNotFound.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
