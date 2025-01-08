import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Globe, Users, Clock, Star } from "lucide-react";
import { Button } from "../../components/ui/button";
import GridBackground from "../../components/Backgrounds/GridBg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import COLOR_THEMES from "./components/color-themes";
import BanglaCalendar from "../../utils/BanglaCalendar";
import monthDurations from "../../assets/months-duration.json";

const LandingPage = () => {
    const [isDark, setIsDark] = useState(false);
    const [colorTheme, setColorTheme] = useState("monochrome");
    const calendar = new BanglaCalendar(monthDurations);
    const today = new Date();
    const bengaliDate = calendar.convertGregorianToBangla(today);
    const formattedCurrentBanglaDate =
        calendar.formatDateForLandingPage(bengaliDate);

    const getGridColor = () => {
        switch (colorTheme) {
            case "warmEarth":
                return "orange";
            case "forest":
                return "green";
            case "ocean":
                return "blue";
            default:
                return "gray";
        }
    };

    // detect device theme dark mode or not
    // will add custom later
    useEffect(() => {
        // Create media query
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

        // Set initial value
        setIsDark(darkModeQuery.matches);

        // Add listener for changes
        const listener = (e) => {
            setIsDark(e.matches);
        };

        darkModeQuery.addListener(listener);

        // Clean up
        return () => darkModeQuery.removeListener(listener);
    }, []);

    const theme = COLOR_THEMES[colorTheme][isDark ? "dark" : "light"];

    const featureCardsData = [
        {
            icon: Calendar,
            title: "বাংলা তারিখ",
            description:
                "সহজেই বাংলা তারিখ দেখুন এবং ইংরেজি তারিখে রূপান্তর করুন।",
        },
        {
            icon: Star,
            title: "উৎসব ও তিথি",
            description: "সব ধর্মীয় এবং সামাজিক উৎসবের সঠিক তারিখ জানুন।",
        },
        {
            icon: Clock,
            title: "শুভ সময়",
            description: "বিশেষ দিনের শুভ সময়গুলি সম্পর্কে সঠিক তথ্য পান।",
        },
        {
            icon: Globe,
            title: "সুবিধাজনক ব্যবহার",
            description: "যেকোনো ডিভাইসে সহজেই ব্যবহার উপভোগ করুন।",
        },
        {
            icon: Users,
            title: "সামাজিক ক্যালেন্ডার",
            description: "বন্ধু ও পরিবারের সঙ্গে ইভেন্ট শেয়ার করুন।",
        },
        {
            icon: Calendar,
            title: "কাস্টম ইভেন্ট",
            description: "নিজের পছন্দমতো ইভেন্ট তৈরি ও সংরক্ষণ করুন।",
        },
    ];

    return (
        <div
            className={`min-h-screen ${isDark ? theme.primary : theme.primary / 20} transition-colors duration-200 relative`}
        >
            <GridBackground
                color={getGridColor()}
                gridOpacity={0.3}
                spacing={24 + 6}
                pattern="dots"
                dotSize={1}
            />

            <Header
                colorTheme={colorTheme}
                isDark={isDark}
                onDarkModeToggle={() => setIsDark(!isDark)}
                onColorThemeChange={setColorTheme}
            />

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div
                    className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24`}
                >
                    <div className="text-center">
                        <h1
                            className={`text-6xl md:text-6xl lg:text-6xl font-bold mb-6 ${theme.text}`}
                        >
                            তিথিরেখা
                            <span
                                className={`block text-2xl font-medium mt-4 ${theme.textSecondary}`}
                            >
                                সহজে বাঙালি সময় ও দিন-ক্ষণ জেনে নিন
                            </span>
                        </h1>
                        <p
                            className={`mt-4 text-xl ${theme.textSecondary} max-w-2xl mx-auto`}
                        >
                            তিথিরেখা হলো আপনার সাংস্কৃতিক উৎসব, তিথি এবং বিশেষ
                            দিনগুলি ট্র্যাক করার সহজতম উপায়।
                        </p>

                        <div className="mt-8 flex justify-center gap-4">
                            <a href="/home" style={{ textDecoration: "none" }}>
                                <Button
                                    size="lg"
                                    className={`${theme.accent} ${theme.accentText} relative ${isDark ? "hover:bg-[#000] hover:text-white" : ""}`}
                                >
                                    সম্পূর্ণ ক্যালেন্ডার{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="/today" style={{ textDecoration: "none" }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className={`${theme.border} border-2 relative ${isDark ? "hover:bg-[#000] bg-gray-500 hover:text-white" : ""}`}
                                >
                                    আজকের দিন
                                </Button>
                            </a>
                        </div>

                        <div
                            className={`mt-12 p-6 ${theme.card} rounded-lg shadow-lg max-w-3xl mx-auto ${theme.border} border`}
                        >
                            <p className={`text-2xl font-medium ${theme.text}`}>
                                আজকের তারিখ:
                            </p>
                            <p
                                className={`text-3xl font-bold mt-2 ${theme.text}`}
                            >
                                {formattedCurrentBanglaDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className={`py-24 ${theme.secondary}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold ${theme.text}`}>
                            তিথিরেখার সুবিধাসমূহ
                        </h2>
                        <p className={`mt-4 text-xl ${theme.textSecondary}`}>
                            আপনার সাংস্কৃতিক জীবনকে আরও সমৃদ্ধ করতে আমাদের কিছু
                            টুলস
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featureCardsData.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 ${theme.card} rounded-lg border ${theme.border} hover:shadow-lg transition-shadow`}
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                    <feature.icon
                                        className={`h-8 w-8 ${theme.text}`}
                                    />
                                </div>
                                <h3
                                    className={`text-xl font-semibold ${theme.text} mb-2`}
                                >
                                    {feature.title}
                                </h3>
                                <p className={theme.textSecondary}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer colorTheme={colorTheme} isDark={isDark} />
        </div>
    );
};

export default LandingPage;
