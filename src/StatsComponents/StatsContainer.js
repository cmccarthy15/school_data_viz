import React, { useState } from 'react';
import YearStat from './YearStat';


const StatsContainer = props => {

    const [years] = useState(Object.keys(props.demStats))
    const [selectedYear, setSelectedYear] = useState(Object.keys(props.genStats)[0])

    const totalEnrollment = props.genStats[selectedYear].total_enrollment

    return (
    <div style={{width: '40vw'}}>
        <div style={{display: 'flex'}}>
            {years.map(year => <div onClick={() => setSelectedYear(year)} key={year} style={{flexGrow: 1, fontWeight:year === selectedYear ? 'bolder' : 'lighter'}}>{year}</div>)}
        </div>
        <YearStat 
            totalEnrollment={totalEnrollment}
            demStats={props.demStats[selectedYear]}
            gradeStats={props.gradeStats[selectedYear]}
            genStats={props.genStats[selectedYear]}/>
    </div>
    );
}

export default StatsContainer;