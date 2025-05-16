import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendario/style.css"; // seu CSS customizado

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const nomeDoMes = date.toLocaleDateString("pt-BR", {
    month: "long",
  });

  return (
    <div className="calendar-container">

        <div className="calendar-header">
          <h4 className="month-title">{nomeDoMes}</h4>
        </div>

      <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
          locale="pt-BR"
          calendarType="iso8601"
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString("pt-BR", { weekday: "short" }).slice(0, 3)
          }
          tileContent={({ date, view }) =>
            view === "month" ? (
            <div className="tile-wrapper">
              <div className="day-number">{date.getDate()}</div>
              <div className="circle-border">
                <div className="day-circle"></div>
              </div>
            </div>

            ) : null
          }
        />
      </div>
    </div>
  );
};

export default Calendario;
