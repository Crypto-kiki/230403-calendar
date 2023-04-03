import Date from "./Date";
import CalendarData from "../calendarData.json";

function Calendar() {
  return (
    <div className="bg-white w-2/3 rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023, 04</div>
      <ul className="grid grid-cols-7 gap-4">
        {CalendarData.map((v, i) => {
          console.log(`${i + 1} ${v}`);

          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
}

export default Calendar;
