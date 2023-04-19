// react
import { Suspense, lazy } from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/** initial rendering */
// Layouts => wrapper for pages
import Layout from "./layouts";
// Loading
import Loading from "./components/Loading";
// Toast
import Toast from "./components/Toast";

function App() {
  /** lazy loading */
  // Albums page
  const Albums = lazy(() => import("./pages/Albums"));
  // Loading page
  const Photos = lazy(() => import("./pages/Photos"));

  return (
    <>
      {/* Toast */}
      <Toast />
      {/* Loading */}
      <Loading />
      {/* suspense wrapped for lazy loading page */}
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route exact path="/*" element={<Layout />}>
              <Route exact index element={<Albums />} />
              <Route exact path="photos" element={<Photos />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}
export default App;
