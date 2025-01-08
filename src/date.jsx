import React from "react";

const BengaliDateCard = ({ date, month, year }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {date} {month}, {year}
                </h2>
                <p className="text-gray-600">আজকের বাংলা তারিখ</p>
            </div>
        </div>
    );
};

export default BengaliDateCard;
