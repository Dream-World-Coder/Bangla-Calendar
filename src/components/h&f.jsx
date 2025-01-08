import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="border-b">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and Brand */}
                    <a href="/" className="flex items-center">
                        <span className="text-2xl font-bold">তিথিরেখা</span>
                    </a>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="/home"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            হোম
                        </a>
                        {/* <a
                            href="/calendar"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            ক্যালেন্ডার
                        </a> */}
                        <a
                            href="/today"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            আজকের দিন
                        </a>
                        <Button
                            variant="default"
                            className="bg-black text-white hover:bg-gray-800"
                        >
                            লগ ইন
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand Column */}
                        <div className="space-y-4">
                            <span className="text-xl font-bold">তিথিরেখা</span>
                            <p className="text-gray-500">
                                বাংলা ক্যালেন্ডার সহজেই দেখুন এবং ব্যবহার করুন
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-semibold mb-4">
                                দ্রুত লিঙ্ক
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        হোম
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/calendar"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        ক্যালেন্ডার
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/today"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        আজকের দিন
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-semibold mb-4">
                                রিসোর্স
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/about"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        আমাদের সম্পর্কে
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        যোগাযোগ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-sm font-semibold mb-4">আইনি</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/privacy"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        গোপনীয়তা নীতি
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/terms"
                                        className="text-gray-500 hover:text-gray-900"
                                    >
                                        শর্তাবলী
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t">
                        <p className="text-gray-500 text-sm text-center">
                            © {new Date().getFullYear()} তিথিরেখা । সর্বস্বত্ব
                            সংরক্ষিত ।
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Header, Footer };
