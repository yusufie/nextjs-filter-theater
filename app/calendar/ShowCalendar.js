import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

function ShowCalendar() {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
    // TODO: Add your code here to fetch events from your API or database
    // and update the "events" state using setEvents().
  };

  return (
    <div className='relative z-10'>
      <button onClick={handleButtonClick}>
        {showCalendar ? 'Hide Calendar' : 'Show Calendar  '}
      </button>
      
      {showCalendar && (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      )}
    </div>
  );
}

  
export default ShowCalendar;