import './App.css'
import { useState, useEffect } from 'react';

const App = () => {
  const [days, setDays] = useState<number[]>([]);
  const [month, setMonth] = useState(new Date());
  
  const showCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed
    const lastDay = new Date(year, month + 1, 0).getDate();
    
    const dayArray = Array.from({ length: lastDay }, (_, i) => i + 1);
    setDays(dayArray);
  }
  
  useEffect(() => {
    showCalendar(month);
  }, [month]);

  const handlePrev = () => {
    const newDate = new Date(month.getFullYear(), month.getMonth() - 1, 1);
    setMonth(newDate);
  }

  const handleNext = () => {
    const newDate = new Date(month.getFullYear(), month.getMonth() + 1, 1);
    setMonth(newDate);
  }

  return (
    <div>
      <div className='header'>
        <button onClick={handlePrev}>前月</button>
        <p>{month.getFullYear()}年 {month.getMonth() + 1}月</p>
        <button onClick={handleNext}>来月</button>
      </div>

      <div className="calendar">
        {days.map(day => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
