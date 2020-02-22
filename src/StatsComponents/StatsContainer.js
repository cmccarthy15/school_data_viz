import React, { useState, useEffect } from 'react';

const StatsContainer = props => {

    const [years] = useState(Object.keys(props.demStats))
    const [selectedYear, setselectedYear] = useState(Object.keys(props.demStats)[2])

    const totalEnrollment = props.genStats[selectedYear].total_enrollment


    const renderYearTab = () => (
        <div>
           {renderGeneralStats()}
           {renderGradeStats()}
        </div>
    )

    const renderGeneralStats = () => {
        return <div>
            <h3>General Stats</h3>
            <div>Total Enrollment: {totalEnrollment}</div>
            <div>Economic Need: {
                props.genStats[selectedYear].economic_need
                    ? props.genStats[selectedYear].economic_need + '%'
                    : 'No Data'}
            </div>
        </div>
    }

    const renderGradeStats = () => {
        return <div>
            <h3>Grade Stats</h3>
            {Object.keys(props.gradeStats[selectedYear]).map( gradeKey => {
                const studentNum = props.gradeStats[selectedYear][gradeKey]
                if(gradeKey === 'id' || !studentNum) return null;
                return <div key={gradeKey}>{gradeKey}: {studentNum}, {(studentNum / totalEnrollment).toFixed(2) * 100}%</div>
            })}
        </div>
    }

    return (
      <div style={{width: '40vw'}}>
        <div style={{display: 'flex'}}>
            {years.map(year => <div onClick={() => setselectedYear(year)} key={year} style={{flexGrow: 1}}>{year}</div>)}
        </div>
        {renderYearTab()}
      </div>
    );
}

export default StatsContainer;