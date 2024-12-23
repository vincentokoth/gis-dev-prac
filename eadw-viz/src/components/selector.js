import React from 'react';
import Select from 'react-select';

const DateSelector = ({ year, setYear, month, setMonth, tenDays, setTenDays }) => {
  const years = [{ value: 2024, label: '2024' }];
  const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
  const dekads = [{ value: 21, label: '21' }];

  return (
    <div>
      <Select options={years} value={year} onChange={(e) => setYear(e.value)} />
      <Select options={months} value={month} onChange={(e) => setMonth(e.value)} />
      <Select options={dekads} value={tenDays} onChange={(e) => setTenDays(e.value)} />
    </div>
  );
};

export default DateSelector;