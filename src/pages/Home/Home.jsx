import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Header, Footer } from "../../components/h&f";
import BanglaCalendar from "../../utils/BanglaCalendar";
import monthDurations from "../../assets/months-duration.json";
import BENGALI_EVENTS from "./Events";

const calendar = new BanglaCalendar(monthDurations);

function convertToEnglishNumerals(bengaliNumber) {
    const bengaliToEnglish = {
        "০": "0",
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
    };

    return bengaliNumber
        .split("") // Split the Bengali number into individual characters
        .map((digit) => bengaliToEnglish[digit] || digit) // Map Bengali digits to English
        .join(""); // Join the English digits back into a string
}

const getDaysInMonth = (todayInEng) => {
    var todayInBng = calendar.convertGregorianToBangla(todayInEng);
    var year = convertToEnglishNumerals(todayInBng.year);
    const bengaliMonths = [
        "বৈশাখ",
        "জ্যৈষ্ঠ",
        "আষাঢ়",
        "শ্রাবণ",
        "ভাদ্র",
        "আশ্বিন",
        "কার্তিক",
        "অগ্রহায়ণ",
        "পৌষ",
        "মাঘ",
        "ফাল্গুন",
        "চৈত্র",
    ];
    var monthIndex = bengaliMonths.indexOf(todayInBng.month);
    return monthDurations[year][monthIndex];
};

const HomePage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const getCurrentBanglaDate = () => {
        const banglaDate = calendar.convertGregorianToBangla(currentDate);
        return {
            day: banglaDate.day,
            month: banglaDate.month,
            year: banglaDate.year,
            weekDay: banglaDate.dayName,
        };
    };

    const generateCalendarDays = () => {
        var todayInEng = new Date(); // will replace all occurrances with currentDate later
        var firstDayOfMonthInEng = new Date();

        firstDayOfMonthInEng.setDate(
            todayInEng.getDate() -
                convertToEnglishNumerals(getCurrentBanglaDate().day) +
                1,
        );
        // This should give the english date at which day 1 of current bangla month is ecountered

        const startWeekDay = firstDayOfMonthInEng.getDay();
        const totalDaysInCurrentMonth = getDaysInMonth(todayInEng);
        const days = [];

        for (let i = 0; i < startWeekDay; i++) {
            days.push(null);
        }

        var today = firstDayOfMonthInEng;
        for (let i = 0; i < totalDaysInCurrentMonth; i++) {
            let englishDate = today.getDate();
            let banglaDate = calendar.convertGregorianToBangla(today).day;
            days.push({ banglaDate: banglaDate, englishDate: englishDate });

            // now change today by +1 day
            today.setDate(today.getDate() + 1);
        }

        return days;
    };

    const handleDateClick = (day) => {
        if (!day) return;
        // const clickedDate = new Date(
        //     currentDate.getFullYear(),
        //     currentDate.getMonth(),
        //     parseInt(day.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d))),
        // );
        // setSelectedDate(clickedDate);
        // instead of changing the currentDate, i shall make another variable/state, cuz its getting used in other fields,
        // needs to be checked, based on the usage
    };

    const getEventsForDate = (date) => {
        if (!date) return [];
        const banglaDate = calendar.convertGregorianToBangla(date);
        const events = BENGALI_EVENTS[banglaDate.month]?.[banglaDate.day] || [];

        if (banglaDate.day === "১৫") events.push("পূর্ণিমা");
        else if (banglaDate.day === "৩০" || banglaDate.day === "১")
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
                    {/* p1 : year, month, arrows, prev & next (yr+month) */}
                    <div className="mb-8">
                        <div className="flex justify-end items-center mb-6">
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="outline"
                                    onClick={previousYear}
                                    className="text-lg"
                                >
                                    <ChevronLeft className="h-5 w-5 mr-1" />
                                    {
                                        calendar.convertGregorianToBangla(
                                            new Date(
                                                currentDate.getFullYear() - 1,
                                                currentDate.getMonth(),
                                                currentDate.getDate(),
                                            ),
                                        ).year
                                    }
                                </Button>
                                <span className="text-xl font-semibold">
                                    {currentBanglaDate.year} বঙ্গাব্দ
                                </span>
                                <Button
                                    variant="outline"
                                    onClick={nextYear}
                                    className="text-lg"
                                >
                                    {
                                        calendar.convertGregorianToBangla(
                                            new Date(
                                                currentDate.getFullYear() + 1,
                                                currentDate.getMonth(),
                                                currentDate.getDate(),
                                            ),
                                        ).year
                                    }
                                    <ChevronRight className="h-5 w-5 ml-1" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <Button variant="ghost" onClick={previousMonth}>
                                <ChevronLeft className="h-5 w-5 mr-1" />
                                {
                                    calendar.convertGregorianToBangla(
                                        new Date(
                                            currentDate.getFullYear(),
                                            currentDate.getMonth() - 1,
                                            currentDate.getDate(),
                                        ),
                                    ).month
                                }
                            </Button>
                            <h2 className="text-2xl font-semibold">
                                {currentBanglaDate.month}
                            </h2>
                            <Button variant="ghost" onClick={nextMonth}>
                                {
                                    calendar.convertGregorianToBangla(
                                        new Date(
                                            currentDate.getFullYear(),
                                            currentDate.getMonth() + 1,
                                            currentDate.getDate(),
                                        ),
                                    ).month
                                }
                                <ChevronRight className="h-5 w-5 ml-1" />
                            </Button>
                        </div>
                    </div>

                    {/* p2: main calendar*/}
                    <div className="bg-white rounded-lg shadow">
                        {/* Weekday Names */}
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

                        {/* calendar dates */}
                        <div className="grid grid-cols-7 gap-px">
                            {/* {generateCalendarDays().map((day, index) => {
                                const isToday = day === currentBanglaDate.day;
                                const isSelected =
                                    selectedDate &&
                                    day ===
                                        calendar.convertGregorianToBangla(
                                            selectedDate,
                                        ).day;
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
                            })} */}
                            {generateCalendarDays().map((day, index) => {
                                if (!day) {
                                    // Render empty cell for null placeholders
                                    return (
                                        <div
                                            key={index}
                                            className="bg-transparent h-16"
                                        ></div>
                                    );
                                }

                                const isToday =
                                    day.banglaDate === currentBanglaDate.day;
                                // &&
                                // calendar.convertGregorianToBangla(
                                //     new Date(),
                                // ).month === currentBanglaDate.month;

                                const isSelected =
                                    selectedDate &&
                                    day.banglaDate ===
                                        calendar.convertGregorianToBangla(
                                            selectedDate,
                                        ).day;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleDateClick(day)}
                                        className={`bg-white px-3 py-4 text-center ${
                                            day.banglaDate
                                                ? "hover:bg-gray-50 cursor-pointer"
                                                : ""
                                        } ${isToday ? "bg-blue-50" : ""} ${
                                            isSelected ? "bg-blue-100" : ""
                                        }`}
                                    >
                                        {/* Bangla Date */}
                                        <span className="text-lg font-semibold">
                                            {day.banglaDate || ""}
                                        </span>
                                        {/* English Date */}
                                        {day.englishDate && (
                                            <div className="text-xs text-gray-400 mt-1">
                                                {day.englishDate}
                                            </div>
                                        )}
                                        {/* Event Indicator */}
                                        {day.banglaDate &&
                                            BENGALI_EVENTS[
                                                currentBanglaDate.month
                                            ]?.[day.banglaDate] && (
                                                <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
                                            )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* p3: events info etc */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">
                            {selectedDate ? "নির্বাচিত দিন" : "আজকের বিশেষ দিন"}
                        </h3>
                        <p className="text-gray-600">
                            {calendar.formatDateForLandingPage(
                                calendar.convertGregorianToBangla(
                                    selectedDate || currentDate,
                                ),
                            )}
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
