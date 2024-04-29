import { useState } from 'react';
import Calendar from 'react-calendar';

export default function Calendar1() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}