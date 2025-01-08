import { useState } from "react";
import { Button } from "../../../components/ui/button";
import COLOR_THEMES from "./color-themes";
import { Menu, X, Moon, Sun, Palette } from "lucide-react";
import PropTypes from "prop-types";

const ThemeSelector = ({ currentTheme, onThemeChange, isDark }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`relative ${isDark ? "invert-[100%]" : "invert-0}"}`}
            >
                <Palette className="h-5 w-5" />
            </Button>

            {isOpen && (
                <div
                    className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${isDark ? "bg-gray-800" : "bg-white"} ring-1 ring-black ring-opacity-5`}
                >
                    <div className="py-1" role="menu">
                        {Object.entries(COLOR_THEMES).map(
                            ([themeKey, theme]) => (
                                <button
                                    key={themeKey}
                                    onClick={() => {
                                        onThemeChange(themeKey);
                                        setIsOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 text-sm ${
                                        currentTheme === themeKey
                                            ? isDark
                                                ? "bg-gray-700 text-white"
                                                : "bg-gray-100 text-gray-900"
                                            : isDark
                                              ? "text-gray-300 hover:bg-gray-700"
                                              : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    {theme.name}
                                </button>
                            ),
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

ThemeSelector.propTypes = {
    currentTheme: PropTypes.string.isRequired,
    onThemeChange: PropTypes.func.isRequired,
    isDark: PropTypes.bool.isRequired,
};

const Header = ({
    colorTheme,
    isDark,
    onDarkModeToggle,
    onColorThemeChange,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = COLOR_THEMES[colorTheme][isDark ? "dark" : "light"];

    const MenuItem = ({ href, children }) => (
        <a
            href={href}
            className={`${theme.textSecondary} hover:${theme.accentText} ${theme.accentHover} px-3 py-2 text-sm font-medium rounded-lg`}
        >
            {children}
        </a>
    );
    MenuItem.propTypes = {
        href: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    };

    return (
        <header
            className={`${theme.primary} border-b ${theme.border} sticky top-0 z-50`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className={`text-xl font-bold ${theme.text}`}>
                            তিথিরেখা
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <MenuItem href="/home">হোম</MenuItem>
                        <MenuItem href="/api">এপিআই</MenuItem>
                        <MenuItem href="/today">আজকের দিন</MenuItem>
                        <MenuItem href="/contact">যোগাযোগ</MenuItem>
                        <MenuItem href="/about">তথ্যাবলী</MenuItem>

                        <div className="flex items-center space-x-2 ml-4">
                            <ThemeSelector
                                currentTheme={colorTheme}
                                onThemeChange={onColorThemeChange}
                                isDark={isDark}
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onDarkModeToggle}
                                className={`relative ${isDark ? "invert-[100%]" : "invert-0}"}`}
                            >
                                {isDark ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeSelector
                            currentTheme={colorTheme}
                            onThemeChange={onColorThemeChange}
                            isDark={isDark}
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onDarkModeToggle}
                            className={`relative ${isDark ? "invert-[100%]" : "invert-0}"}`}
                        >
                            {isDark ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`relative ${isDark ? "invert-[100%]" : "invert-0}"}`}
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
                                href="/home"
                                className={`block px-3 py-2 ${theme.textSecondary} hover:${theme.text}`}
                            >
                                হোম
                            </a>
                            <a
                                href="/api"
                                className={`block px-3 py-2 ${theme.textSecondary} hover:${theme.text}`}
                            >
                                এপিআই
                            </a>
                            <a
                                href="/today"
                                className={`block px-3 py-2 ${theme.textSecondary} hover:${theme.text}`}
                            >
                                আজকের দিন
                            </a>
                            <a
                                href="/contact"
                                className={`block px-3 py-2 ${theme.textSecondary} hover:${theme.text}`}
                            >
                                যোগাযোগ
                            </a>
                            <a
                                href="/about"
                                className={`block px-3 py-2 ${theme.textSecondary} hover:${theme.text}`}
                            >
                                তথ্যাবলী
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

Header.propTypes = {
    colorTheme: PropTypes.string.isRequired,
    isDark: PropTypes.bool.isRequired,
    onDarkModeToggle: PropTypes.func.isRequired,
    onColorThemeChange: PropTypes.func.isRequired,
};

export default Header;
