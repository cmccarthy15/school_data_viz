import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'



const captionOptions = {
    dem: {
        // columns
        male_percentage: 'male_percentage', 
        asian_percentage: 'asian_percentage',
        white_percentage: 'white_percentage', 
        black_percentage: 'black_percentage', 
        hispanic_percentage: 'hispanic_percentage', 
        multiracial_percentage: 'multiracial_percentage', 
        ell_percentage: 'ell_percentage', 
        poverty_percentage: 'poverty_percentage', 
        disability_percentage: 'disability_percentage', 
        female_percentage: 'female_percentage'
    },
    grade: {
        
    }
    
}

const ChartContainer = props => {
    const demCategories = ['male', 'female', 'white', 'black', 'asian', 'hispanic', 'multiracial', 'ell', 'poverty', 'disability']

    const demDataFormatter = () => {
        // parse this shit on the backend to floats 0 to 1 and then fix the stats panel cause that will be WAY easier 
        return Object.values(props.demStats).map((
            { male_percentage, asian_percentage, white_percentage, black_percentage, hispanic_percentage, multiracial_percentage, ell_percentage, poverty_percentage, disability_percentage, female_percentage}) => {
                [male_percentage, asian_percentage, white_percentage, black_percentage, hispanic_percentage, multiracial_percentage, ell_percentage, poverty_percentage, disability_percentage, female_percentage].forEach(percentage => percentage = percentage/100)
                    // percentage = percentage.parseInt() / 100)
                console.log('pleaes have updated', male_percentage)
                return {data: {male_percentage, asian_percentage, white_percentage, black_percentage, hispanic_percentage, multiracial_percentage, ell_percentage, poverty_percentage, disability_percentage, female_percentage},meta:{ color: 'green'}}
        })
    }

    // const [difficulty, setDifficulty] = useState("easy")
    // console.log(Object.keys(props.demStats['2013']))
    // console.log(props)
    if(props.vizType === 'dem'){
        console.log(demDataFormatter(), captionOptions.dem)
    } else if (props.vizType === 'grade'){}

    

    // debugger;

    return (
      <div style={{width: '40vw'}}>
          ChartContainer
          <RadarChart 
            captions={captionOptions.dem}
            data={demDataFormatter().slice(0,1)}/>
      </div>
    );
}

export default ChartContainer;