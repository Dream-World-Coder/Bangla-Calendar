import COLOR_THEMES from "./color-themes";
import PropTypes from "prop-types";

const Footer = ({ colorTheme, isDark }) => {
    const theme = COLOR_THEMES[colorTheme][isDark ? "dark" : "light"];
    const footerItems = [
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
    ];

    return (
        <footer className={`${theme.secondary} border-t ${theme.border}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerItems.map((section, index) => (
                        <div key={index}>
                            <h3
                                className={`text-sm font-semibold ${theme.text} tracking-wider uppercase`}
                            >
                                {section.title}
                            </h3>
                            <ul className="mt-4 space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className={`text-base ${theme.textSecondary} hover:${theme.text}`}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={`mt-12 border-t ${theme.border} pt-8`}>
                    <p
                        className={`text-base ${theme.textSecondary} text-center`}
                    >
                        &copy; {new Date().getFullYear()} তিথিরেখা । সর্বস্বত্ব
                        সংরক্ষিত ।
                    </p>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    colorTheme: PropTypes.string,
    isDark: PropTypes.bool,
};

export default Footer;
