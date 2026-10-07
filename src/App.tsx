import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "./App.css";
import Layout from "./components/Layout";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import TeacherBio from "./pages/TeacherBio";
import NotFound from "./pages/NotFound";
import Refer from "./pages/Refer";
import PreRegister from "./pages/PreRegister";
import Resources from "./pages/Resources";
import Articles from "./pages/Articles";
import Register from "./pages/Register";
import ProgramsPage from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Testimonials from "./pages/Testimonials";
import Apply from "./pages/Apply";
import Faq from "./pages/Faq";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (pathname === "/" && hash === "#contact") {
      // After Home mounts and paints, scroll to contact section
      const raf = requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(raf);
    }
    // Instant, before paint — html has scroll-behavior: smooth, which would animate this
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Seo />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teacher-bio/:slug" element={<TeacherBio />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/pre-register" element={<PreRegister />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/register" element={<Register />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
