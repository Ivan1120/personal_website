import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Colors from '../helper/Colors'



const CircleProgress = (props) => {

    const percentage = props.percentage;
    const text = props.label;
    const color = props.color;

    return (
        <div className="text-center d-flex flex-column align-items-center">
            <div style={{ width: '40px' }}>
                <CircularProgressbar
                    value={percentage}
                    text={''}
                    // background={true}
                    // backgroundPadding='13'
                    strokeWidth='20'

                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '20px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',


                        // Colors
                        pathColor: color,
                        textColor: Colors.secondary,
                        trailColor: Colors.grey,
                        backgroundColor: Colors.secondary,
                    })} />
            </div>

            <p className="font-weight-bold">{text}</p>
        </div>
    )
}

export default CircleProgress;