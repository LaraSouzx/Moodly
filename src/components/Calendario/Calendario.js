import React from "react";
import "../Calendario/style.css";

const daysOfWeek = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];

const Calendario = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

  const startDay = (firstDayOfMonth.getDay() + 6) % 7;
  const totalDays = lastDayOfMonth.getDate();

  const daysArray = [];

  for (let i = 0; i < startDay; i++) {
    daysArray.push(null);
  }

  for (let day = 1; day <= totalDays; day++) {
    daysArray.push(day);
  }

  while (daysArray.length % 7 !== 0) {
    daysArray.push(null);
  }

  const weeks = [];
  for (let i = 0; i < daysArray.length; i += 7) {
    weeks.push(daysArray.slice(i, i + 7));
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
         <h4 className="month-title">{months[currentMonth]}</h4>
        <div className="header">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day-header">
              {day}
            </div>
          ))}
        </div>
        {weeks.map((week, rowIndex) => (
  <div key={rowIndex} className="week-row">
    {week.map((day, colIndex) => (
      <div key={colIndex} className="day-cell">
        {day ? (
          <>
            <div className="day-number">{day}</div>
            <div className="day-circle"></div>
          </>
        ) : (
          <div className="empty-cell"></div>
        )}
      </div>
    ))}
  </div>
))}
      </div>
    </div>
  );
};

export default Calendario;
