"use client";
import { useState } from "react";
import Img from "next/image";
import left from "../../../public/images/left.png";
import right from "../../../public/images/right.png";

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 7, 1)); // Set the correct month for August

    const weddingDate = new Date(2024, 7, 2); // Correct month for August

    const daysOfWeek = ["Дс", "Сс", "Ср", "Бс", "Жм", "Сн", "Жк"];
    const months = [
        "Қаңтар",
        "Ақпан",
        "Наурыз",
        "Сәуір",
        "Мамыр",
        "Маусым",
        "Шілде",
        "Тамыз",
        "Қыркүйек",
        "Қазан",
        "Қараша",
        "Желтоқсан",
    ];

    const renderDaysOfWeek = () => {
        return daysOfWeek.map((day, index) => (
            <div key={index} className="day-name">
                {day}
            </div>
        ));
    };

    const renderDaysInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const adjustedFirstDay =
            firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        for (let i = 0; i < adjustedFirstDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isWeddingDay =
                year === weddingDate.getFullYear() &&
                month === weddingDate.getMonth() &&
                day === weddingDate.getDate();

            days.push(
                <div
                    key={day}
                    className={`day ${isWeddingDay ? "wedding-day" : ""}`}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const changeMonth = (direction: number) => {
        const newDate = new Date(
            currentDate.setMonth(currentDate.getMonth() + direction)
        );
        setCurrentDate(newDate);
    };

    return (
        <div className="calendar">
            <div className="header mt-5 mb-5">
                <button onClick={() => changeMonth(-1)}>
                    <Img src={left} alt="previous" width={10} height={10} />
                </button>
                <h2>
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button onClick={() => changeMonth(1)}>
                    <Img src={right} alt="next" width={10} height={10} />
                </button>
            </div>
            <div className="days-of-week">{renderDaysOfWeek()}</div>
            <div className="days">{renderDaysInMonth()}</div>

            <style jsx global>{`
                .calendar {
                    width: 300px;
                    margin: 15px auto;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    overflow: hidden;
                }
                .header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f5f5f5;
                    padding: 10px 20px;
                }
                .header button {
                    margin: 0 10px;
                    background-color: #f9f9f9;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }
                .days-of-week,
                .days {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                }
                .day-name,
                .day,
                .empty-day {
                    padding: 10px;
                    background-color: #fff; /* Set all backgrounds to white */
                }
                .day {
                    position: relative;
                    transition: background-color 0.3s ease;
                }
                .day:hover {
                    background-color: #f5f5f5;
                }
                .day.wedding-day {
                    color: #ff6347;
                    font-weight: bold;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}
