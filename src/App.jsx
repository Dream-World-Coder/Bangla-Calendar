import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// /today -- scrape

// import { DarkModeProvider } from "./contexts/DarkModeContext";

// import LandingPage from "./pages/LandingPage/LandingPage-1";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
// import BengaliDateCard from "./date";

// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import ContactForm from "./pages/Contact/ContactForm";

// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import ForgotPassword from "./pages/Auth/ForgotPassword";
// import DeleteAccount from "./pages/Auth/DeleteAccount";

// import NotFound from "./pages/404";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
    return (
        // <DarkModeProvider>
        <Router>
            <Routes>
                {/* <Route
                    path="/"
                    element={
                        <BengaliDateCard
                            date={bengaliDate.date}
                            month={bengaliDate.month}
                            year={bengaliDate.year}
                        />
                    }
                /> */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />

                {/* <Route path="/profile" element={<Profile />} /> */}

                {/*
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact-form" element={<ContactForm />} />
                 */}

                {/*
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                    <Route path="/auth/delete-account" element={<DeleteAccount />} />
                */}

                {/* <Route path="*" element={<NotFound />} /> */}
                <Analytics />
                {/* <SpeedInsights /> */}
            </Routes>
        </Router>
        // {/* </DarkModeProvider> */}
    );
};

export default App;
