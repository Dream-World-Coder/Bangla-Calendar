import { useState, useEffect } from "react";
import { getDate } from "bangla-calendar";
import {
    ArrowRight,
    Calendar,
    Globe,
    Users,
    Clock,
    Star,
    Menu,
    X,
    Moon,
    Sun,
} from "lucide-react";
import { Button } from "../../components/ui/button";

const THEMES = {
    light: {
        primary: "bg-white",
        secondary: "bg-gray-50",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        accent: "bg-gray-900",
        accentText: "text-white",
        border: "border-gray-200",
        card: "bg-white",
    },
    dark: {
        primary: "bg-gray-900",
        secondary: "bg-gray-800",
        text: "text-white",
        textSecondary: "text-gray-300",
        accent: "bg-white",
        accentText: "text-gray-900",
        border: "border-gray-700",
        card: "bg-gray-800",
    },
};

const Header = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const MenuItem = ({ href, children }) => (
        <a
            href={href}
            className={`${THEMES[theme].textSecondary} hover:${THEMES[theme].text} px-3 py-2 text-sm font-medium`}
        >
            {children}
        </a>
    );

    return (
        <header
            className={`${THEMES[theme].primary} border-b ${THEMES[theme].border} sticky top-0 z-50`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span
                            className={`text-xl font-bold ${THEMES[theme].text}`}
                        >
                            বাংলা ক্যালেন্ডার
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <MenuItem href="/">হোম</MenuItem>
                        <MenuItem href="/api">এপিআই</MenuItem>
                        <MenuItem href="/today">আজকের দিন</MenuItem>
                        <MenuItem href="/contact">যোগাযোগ</MenuItem>
                        <MenuItem href="/about">আমাদের সম্পর্কে</MenuItem>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="ml-4"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5 text-white" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="mr-2"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <a
                                href="/"
                                className={`block px-3 py-2 ${THEMES[theme].textSecondary} hover:${THEMES[theme].text}`}
                            >
                                হোম
                            </a>
                            <a
                                href="/api"
                                className={`block px-3 py-2 ${THEMES[theme].textSecondary} hover:${THEMES[theme].text}`}
                            >
                                এপিআই
                            </a>
                            <a
                                href="/today"
                                className={`block px-3 py-2 ${THEMES[theme].textSecondary} hover:${THEMES[theme].text}`}
                            >
                                আজকের দিন
                            </a>
                            <a
                                href="/contact"
                                className={`block px-3 py-2 ${THEMES[theme].textSecondary} hover:${THEMES[theme].text}`}
                            >
                                যোগাযোগ
                            </a>
                            <a
                                href="/about"
                                className={`block px-3 py-2 ${THEMES[theme].textSecondary} hover:${THEMES[theme].text}`}
                            >
                                আমাদের সম্পর্কে
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

const LandingPage = () => {
    const [theme, setTheme] = useState("light");
    const currentBanglaDate = getDate(new Date(), {
        format: "eeee, D MMMM, YYYY",
    });

    useEffect(() => {
        // Check system preference on mount
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div
            className={`min-h-screen ${THEMES[theme].primary} transition-colors duration-200`}
        >
            <Header theme={theme} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div
                    className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ${THEMES[theme].text}`}
                >
                    <div className="text-center">
                        <h1 className="text-6xl font-bold mb-6">
                            বাংলা ক্যালেন্ডার
                            <span
                                className={`block text-2xl font-medium mt-4 ${THEMES[theme].textSecondary}`}
                            >
                                আপনার সময়ের সাথে সংযুক্ত হোন
                            </span>
                        </h1>
                        <p
                            className={`mt-4 text-xl ${THEMES[theme].textSecondary} max-w-2xl mx-auto`}
                        >
                            বাংলা ক্যালেন্ডার আপনার সাংস্কৃতিক উত্সব, তিথি এবং
                            বিশেষ দিনগুলি ট্র্যাক করার সহজতম উপায়।
                        </p>

                        <div className="mt-8 flex justify-center gap-4">
                            <Button
                                size="lg"
                                className={`${THEMES[theme].accent} ${THEMES[theme].accentText}`}
                            >
                                শুরু করুন{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className={THEMES[theme].border}
                            >
                                আরও জানুন
                            </Button>
                        </div>

                        <div
                            className={`mt-12 p-6 ${THEMES[theme].card} rounded-lg shadow-lg max-w-3xl mx-auto ${THEMES[theme].border} border`}
                        >
                            <p
                                className={`text-2xl font-medium ${THEMES[theme].text}`}
                            >
                                আজকের তারিখ:
                            </p>
                            <p
                                className={`text-3xl font-bold mt-2 ${THEMES[theme].text}`}
                            >
                                {currentBanglaDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className={`py-24 ${THEMES[theme].secondary}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className={`text-4xl font-bold ${THEMES[theme].text}`}
                        >
                            সুবিধাসমূহ
                        </h2>
                        <p
                            className={`mt-4 text-xl ${THEMES[theme].textSecondary}`}
                        >
                            আপনার সাংস্কৃতিক জীবনযাপনের জন্য প্রয়োজনীয় সকল
                            টুলস
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Calendar,
                                title: "বাংলা তারিখ",
                                description:
                                    "সহজেই বাংলা তারিখ দেখুন এবং রূপান্তর করুন",
                            },
                            {
                                icon: Star,
                                title: "উৎসব ও তিথি",
                                description:
                                    "সকল ধর্মীয় ও সামাজিক উৎসবের তারিখ জানুন",
                            },
                            {
                                icon: Clock,
                                title: "শুভ মুহূর্ত",
                                description: "বিশেষ দিনের শুভ মুহূর্ত জানুন",
                            },
                            {
                                icon: Globe,
                                title: "সর্বত্র ব্যবহার",
                                description: "যেকোনো ডিভাইসে ব্যবহার করুন",
                            },
                            {
                                icon: Users,
                                title: "সামাজিক ক্যালেন্ডার",
                                description: "বন্ধুদের সাথে ইভেন্ট শেয়ার করুন",
                            },
                            {
                                icon: Calendar,
                                title: "কাস্টম ইভেন্ট",
                                description: "নিজের ইভেন্ট যোগ করুন",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 ${THEMES[theme].card} rounded-lg border ${THEMES[theme].border} hover:shadow-lg transition-shadow`}
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                    <feature.icon
                                        className={`h-8 w-8 ${THEMES[theme].text}`}
                                    />
                                </div>
                                <h3
                                    className={`text-xl font-semibold ${THEMES[theme].text} mb-2`}
                                >
                                    {feature.title}
                                </h3>
                                <p className={THEMES[theme].textSecondary}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                className={`${THEMES[theme].secondary} border-t ${THEMES[theme].border}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "প্রোডাক্ট",
                                links: ["ফিচার", "প্রাইসিং"],
                            },
                            {
                                title: "কোম্পানি",
                                links: ["আমাদের সম্পর্কে", "ব্লগ"],
                            },
                            {
                                title: "সাপোর্ট",
                                links: ["হেল্প সেন্টার", "যোগাযোগ"],
                            },
                            {
                                title: "লিগ্যাল",
                                links: ["প্রাইভেসি", "টার্মস"],
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <h3
                                    className={`text-sm font-semibold ${THEMES[theme].text} tracking-wider uppercase`}
                                >
                                    {section.title}
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href="#"
                                                className={`text-base ${THEMES[theme].textSecondary} hover:${THEMES[theme].text}`}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`mt-12 border-t ${THEMES[theme].border} pt-8`}
                    >
                        <p
                            className={`text-base ${THEMES[theme].textSecondary} text-center`}
                        >
                            &copy; {new Date().getFullYear()} বাংলা ক্যালেন্ডার।
                            সর্বস্বত্ব সংরক্ষিত।
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
