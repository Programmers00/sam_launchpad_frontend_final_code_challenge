// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layouts => wrapper for pages
import Layout from "./layouts";
// Albums page
import Albums from "./pages/Albums";
// Photos page
import Photos from "./pages/Photos";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/*" element={<Layout />}>
          <Route exact index element={<Albums />} />
          <Route exact path="photos" element={<Photos />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
