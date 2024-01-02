import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function Timer(props) {
    const duration = 1.5 * 60;

    return (
        <div className="timer position-absolute">
            <CountdownCircleTimer
                style={{ color: '#6138ca' }}
                isPlaying
                duration={duration}
                colors={[
                    '#4f46e5',
                    '#FF0000',
                    '#FF0000',
                ]}
                colorsTime={[duration, 5, 0]}
                rotation='counterclockwise'
                onComplete={() => {
                    props.onTimeUp();
                    return [false, 1000];
                }}

                size={90}
            >
                {({ remainingTime }) => {
                    const minutes = Math.floor(remainingTime / 60);
                    const seconds = remainingTime % 60;
                    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                }}
            </CountdownCircleTimer>
        </div>
    );
}
