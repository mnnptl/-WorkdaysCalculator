import React, { useState, useEffect } from 'react';

const WorkdaysCalculator = () => {
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [vacationDays, setVacationDays] = useState(25);
  const [sickDays, setSickDays] = useState(5);
  const [publicHolidays, setPublicHolidays] = useState(11);
  const [workdays, setWorkdays] = useState(0);

  useEffect(() => {
    const totalWeeks = 52;
    const totalDays = totalWeeks * daysPerWeek;
    const workDays = totalDays - vacationDays - sickDays - publicHolidays;
    setWorkdays(workDays);
  }, [daysPerWeek, vacationDays, sickDays, publicHolidays]);

  return (
    <div className="calculator">
      <h2>Calculateur de jours travaillés pour freelance</h2>
      <div className="input-group">
        <label htmlFor="daysPerWeek">Jours travaillés par semaine</label>
        <input
          id="daysPerWeek"
          type="number"
          value={daysPerWeek}
          onChange={(e) => setDaysPerWeek(Number(e.target.value))}
          min="1"
          max="7"
        />
      </div>
      <div className="input-group">
        <label htmlFor="hoursPerDay">Heures travaillées par jour</label>
        <input
          id="hoursPerDay"
          type="number"
          value={hoursPerDay}
          onChange={(e) => setHoursPerDay(Number(e.target.value))}
          min="1"
          max="24"
        />
      </div>
      <div className="input-group">
        <label htmlFor="vacationDays">Jours de congés par an</label>
        <input
          id="vacationDays"
          type="number"
          value={vacationDays}
          onChange={(e) => setVacationDays(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="sickDays">Jours de maladie prévus</label>
        <input
          id="sickDays"
          type="number"
          value={sickDays}
          onChange={(e) => setSickDays(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="publicHolidays">Jours fériés</label>
        <input
          id="publicHolidays"
          type="number"
          value={publicHolidays}
          onChange={(e) => setPublicHolidays(Number(e.target.value))}
          min="0"
        />
      </div>
      <div className="results">
        <p>Nombre de jours travaillés par an : {workdays}</p>
        <p>Nombre d'heures travaillées par an : {workdays * hoursPerDay}</p>
      </div>
    </div>
  );
};

export default WorkdaysCalculator;
