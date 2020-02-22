import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import StatsContainer from './StatsContainer';
import ChartContainer from './ChartContainer';

const StatsView = props => {

    const [school, setSchool] = useState({})

    useEffect(() => {
        // setTimeout(() => {
            fetch('http://localhost:3000/api/v1/schools/100')
            .then(res => res.json())
            .then(school => setSchool(school))
            
        // }, 1000)
    }, [])

  
    console.log(school)

    const renderLoader = () => <div>We be loaddinggg</div>

    const renderSchool = () => (
        <div style={{width: '100vw'}}>
            <h1>{school.name}</h1>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <StatsContainer
                    gradeStats={school.grade_stats}
                    demStats={school.dem_stats}
                    genStats={school.gen_stats}/>
                <ChartContainer />
            </div>
        </div>
    )
    return (
      Object.keys(school).length ? renderSchool() : renderLoader()
    );
}

export default StatsView;