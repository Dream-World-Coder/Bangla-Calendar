import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Header, Footer } from "../../components/h&f";
import BanglaCalendar from "../../utils/BanglaCalendar";
import monthDurations from "../../assets/months-duration.json";
import BENGALI_EVENTS from "./Events";
import { getDay, getMonth, getYear, getWeekDay } from "bangla-calendar";

const getDaysInMonth = (date) => {
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const currentMonthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const daysInMonth = Math.floor(
        (nextMonth - currentMonthStart) / (1000 * 60 * 60 * 24),
    );
    return daysInMonth;
};

const HomePage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const calendar = new BanglaCalendar(monthDurations);
    const today = new Date();
    const currentBanglaDate = calendar.convertGregorianToBangla(today);

    const getCurrentBanglaDate = () => {
        return {
            day: getDay(currentDate),
            month: getMonth(currentDate, { format: "MMMM" }),
            year: getYear(currentDate),
            weekDay: getWeekDay(currentDate),
        };
    };

    const generateCalendarDays = () => {
        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1,
        );
        const startWeekDay = firstDayOfMonth.getDay();
        const totalDays = getDaysInMonth(currentDate);

        const days = [];
        // Add empty cells for the first week
        for (let i = 0; i < startWeekDay; i++) {
            days.push(null);
        }

        // Add the days
        for (let i = 1; i <= totalDays; i++) {
            const dayDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                i,
            );
            const banglaDay = getDay(dayDate);
            days.push(banglaDay);
        }

        return days;
    };

    // not works ig, cuz currentdate in bangla numbers
    const handleDateClick = (day) => {
        if (!day) return;
        const clickedDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            parseInt(day),
        );
        setSelectedDate(clickedDate);
    };

    const getEventsForDate = (date) => {
        if (!date) return [];
        const banglaMonth = getMonth(date, { format: "MMMM" });
        const banglaDay = getDay(date);
        const events = BENGALI_EVENTS[banglaMonth]?.[banglaDay] || [];

        // Add moon phase events
        if (banglaDay === "১৫") events.push("পূর্ণিমা");
        else if (banglaDay === "৩০" || banglaDay === "১")
            events.push("অমাবস্যা");

        return events;
    };

    const nextMonth = () => {
        const nextDate = new Date(currentDate);
        nextDate.setMonth(currentDate.getMonth() + 1);
        setCurrentDate(nextDate);
        setSelectedDate(null);
    };

    const previousMonth = () => {
        const prevDate = new Date(currentDate);
        prevDate.setMonth(currentDate.getMonth() - 1);
        setCurrentDate(prevDate);
        setSelectedDate(null);
    };

    const nextYear = () => {
        const nextDate = new Date(currentDate);
        nextDate.setFullYear(currentDate.getFullYear() + 1);
        setCurrentDate(nextDate);
        setSelectedDate(null);
    };

    const previousYear = () => {
        const prevDate = new Date(currentDate);
        prevDate.setFullYear(currentDate.getFullYear() - 1);
        setCurrentDate(prevDate);
        setSelectedDate(null);
    };

    const currentBanglaDate = getCurrentBanglaDate();

    return (
        <>
            <Header />
            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <div className="flex justify-betweenX justify-end items-center mb-6">
                            {/* <h1 className="text-4xl font-bold">তিথিরেখা</h1> */}
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="outline"
                                    onClick={previousYear}
                                    className="text-lg"
                                >
                                    <ChevronLeft className="h-5 w-5 mr-1" />
                                    {getYear(
                                        new Date(
                                            currentDate.getFullYear() - 1,
                                            currentDate.getMonth(),
                                            currentDate.getDate(),
                                        ),
                                    )}
                                </Button>
                                <span className="text-xl font-semibold">
                                    {currentBanglaDate.year} বঙ্গাব্দ
                                </span>
                                <Button
                                    variant="outline"
                                    onClick={nextYear}
                                    className="text-lg"
                                >
                                    {getYear(
                                        new Date(
                                            currentDate.getFullYear() + 1,
                                            currentDate.getMonth(),
                                            currentDate.getDate(),
                                        ),
                                    )}
                                    <ChevronRight className="h-5 w-5 ml-1" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <Button variant="ghost" onClick={previousMonth}>
                                <ChevronLeft className="h-5 w-5 mr-1" />
                                {getMonth(
                                    new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth() - 1,
                                        currentDate.getDate(),
                                    ),
                                    { format: "MMMM" },
                                )}
                            </Button>
                            <h2 className="text-2xl font-semibold">
                                {currentBanglaDate.month}
                            </h2>
                            <Button variant="ghost" onClick={nextMonth}>
                                {getMonth(
                                    new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth() + 1,
                                        currentDate.getDate(),
                                    ),
                                    { format: "MMMM" },
                                )}
                                <ChevronRight className="h-5 w-5 ml-1" />
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow">
                        <div className="grid grid-cols-7 gap-px bg-gray-200 border-b">
                            {[
                                "রবি",
                                "সোম",
                                "মঙ্গল",
                                "বুধ",
                                "বৃহস্পতি",
                                "শুক্র",
                                "শনি",
                            ].map((day, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 py-2 text-center text-sm font-semibold text-gray-700"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-px">
                            {generateCalendarDays().map((day, index) => {
                                const isToday = day === currentBanglaDate.day;
                                const isSelected =
                                    selectedDate &&
                                    day === getDay(selectedDate);

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleDateClick(day)}
                                        className={`bg-white px-3 py-4 text-center ${
                                            day
                                                ? "hover:bg-gray-50 cursor-pointer"
                                                : ""
                                        } ${isToday ? "bg-blue-50" : ""} ${
                                            isSelected ? "bg-blue-100" : ""
                                        }`}
                                    >
                                        <span className="text-sm">
                                            {day || ""}
                                        </span>
                                        {day &&
                                            BENGALI_EVENTS[
                                                currentBanglaDate.month
                                            ]?.[day] && (
                                                <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
                                            )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">
                            {selectedDate ? "নির্বাচিত দিন" : "আজকের বিশেষ দিন"}
                        </h3>
                        <p className="text-gray-600">
                            {selectedDate
                                ? getDate(selectedDate, {
                                      format: "eeee, D MMMM, YYYY",
                                  })
                                : getDate(currentDate, {
                                      format: "eeee, D MMMM, YYYY",
                                  })}
                        </p>

                        {(() => {
                            const events = getEventsForDate(
                                selectedDate || currentDate,
                            );
                            if (events.length > 0) {
                                return (
                                    <div className="mt-4">
                                        <h4 className="text-lg font-medium mb-2">
                                            বিশেষ অনুষ্ঠান:
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {events.map((event, index) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-700"
                                                >
                                                    {event}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }
                            return null;
                        })()}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
