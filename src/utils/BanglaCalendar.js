class BanglaCalendar {
    constructor(monthDurations) {
        this.bengaliMonths = [
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
        this.dayNames = [
            "রবি",
            "সোম",
            "মঙ্গল",
            "বুধ",
            "বৃহস্পতি",
            "শুক্র",
            "শনি",
        ];
        this.monthDurations = monthDurations;
    }

    // Convert English numerals to Bengali numerals
    convertToBengaliNumerals(number) {
        const bengaliDigits = [
            "০",
            "১",
            "২",
            "৩",
            "৪",
            "৫",
            "৬",
            "৭",
            "৮",
            "৯",
        ];
        return number
            .toString()
            .split("")
            .map((digit) => bengaliDigits[parseInt(digit, 10)])
            .join("");
    }

    isGregorianLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getMonthLengths(bengaliYear) {
        const monthLengths = this.monthDurations[bengaliYear];
        if (!monthLengths) {
            throw new Error(
                `No data available for Bengali year ${bengaliYear}`,
            );
        }
        return monthLengths;
    }

    getNewYearStart(gregorianYear) {
        if (this.isGregorianLeapYear(gregorianYear)) {
            return new Date(gregorianYear, 3, 14); // April 14 (month is 0-based)
        }
        return new Date(gregorianYear, 3, 15); // April 15
    }

    convertGregorianToBangla(gregorianDate) {
        // gregorianDate: <Date Obj>

        let bengaliYear = gregorianDate.getFullYear() - 593;
        let bengaliYearStart = this.getNewYearStart(
            gregorianDate.getFullYear(),
        );
        if (gregorianDate < bengaliYearStart) {
            bengaliYear -= 1;
            bengaliYearStart = this.getNewYearStart(
                gregorianDate.getFullYear() - 1,
            );
        }

        const daysDifference = Math.floor(
            (gregorianDate - bengaliYearStart) / (1000 * 60 * 60 * 24),
        );

        const monthLengths = this.getMonthLengths(
            bengaliYear,
            gregorianDate.getFullYear(),
        );

        let monthIndex = 0;
        let remainingDays = daysDifference;
        while (
            monthIndex < monthLengths.length &&
            remainingDays >= monthLengths[monthIndex]
        ) {
            remainingDays -= monthLengths[monthIndex];
            monthIndex += 1;
        }

        const bengaliDay = remainingDays + 1;
        const bengaliMonth = this.bengaliMonths[monthIndex];
        const dayName = this.dayNames[gregorianDate.getDay()];

        return {
            year: this.convertToBengaliNumerals(bengaliYear),
            month: bengaliMonth,
            day: this.convertToBengaliNumerals(bengaliDay),
            dayName: dayName,
        };
    }

    formatDate(bengaliDate) {
        const { day, month, year, dayName } = bengaliDate;
        return `${day} ${month} ${year} (${dayName})`;
    }

    formatDateForLandingPage(bengaliDate) {
        const { day, month, year, dayName } = bengaliDate;
        return `${dayName}বার ${day} ${month} ${year}`;
    }
}

export default BanglaCalendar;
