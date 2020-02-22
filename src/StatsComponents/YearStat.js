import React from 'react';

const YearStat = props => {
    const { totalEnrollment, demStats, genStats, gradeStats } = props
    const demCategories = ['male', 'female', 'white', 'black', 'asian', 'hispanic', 'multiracial', 'ell', 'poverty', 'disability']
    
    const renderGeneralStats = () => {
        return <div>
            <h3>General Stats</h3>
            <div>Total Enrollment: {totalEnrollment}</div>
            <div>Economic Need: {
                genStats.economic_need
                    ? genStats.economic_need + '%'
                    : 'No Data'}
            </div>
        </div>
    }

    const renderDemStats = () => {
        return (
            <div>
                <h3>Demographic Statistics</h3>
                {demCategories.map(categoryPrefix => (
                    <div key={categoryPrefix}>{categoryPrefix}: {demStats[categoryPrefix]}, {demStats[categoryPrefix + '_percentage']}%</div>
                ))}
            </div>
        )
    }

    const renderGradeStats = () => {
        return <div>
            <h3>Grade Stats</h3>
            {Object.keys(gradeStats).map( gradeKey => {
                const studentNum = gradeStats[gradeKey]
                if(gradeKey === 'id' || !studentNum) return null;
                return <div key={gradeKey}>{gradeKey}: {studentNum}, {(studentNum / totalEnrollment).toFixed(2) * 100}%</div>
            })}
        </div>
    }
  
    return (
        <>
            {renderGeneralStats()}
            {renderGradeStats()}
            {renderDemStats()}
        </>
    );
}

export default YearStat;