import React, { useState, useEffect } from 'react';
import StatsContainer from './StatsContainer';
import ChartContainer from './ChartContainer';

const StatsView = props => {

    const [school, setSchool] = useState({})
    const [vizType, setVizType] = useState('dem')

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/schools/100')
        .then(res => res.json())
        .then(school => setSchool(school))
    }, [])

    const renderLoader = () => <div>We be loaddinggg</div>

    const renderSchool = () => (
        <div style={{width: '90vw'}}>
            <h1>{school.name}</h1>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <StatsContainer
                    gradeStats={school.grade_stats}
                    demStats={school.dem_stats}
                    genStats={school.gen_stats}
                    setVizType={setVizType}/>
                <ChartContainer 
                    vizType={vizType}
                    demStats={school.dem_stats}
                    gradeStats={school.grade_stats}/>
            </div>
        </div>
    )
    return (
      Object.keys(school).length ? renderSchool() : renderLoader()
    );
}

export default StatsView;