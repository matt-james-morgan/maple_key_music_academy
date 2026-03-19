import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import TeacherBio from "./pages/TeacherBio";
import NotFound from "./pages/NotFound";
import Refer from "./pages/Refer";
import PreRegister from "./pages/PreRegister";
// import Resources from "./pages/Resources";
import Register from "./pages/Register";
import ProgramsPage from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === "/" && hash === "#contact") {
      // After Home mounts and paints, scroll to contact section
      const raf = requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teacher-bio/:slug" element={<TeacherBio />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/pre-register" element={<PreRegister />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
