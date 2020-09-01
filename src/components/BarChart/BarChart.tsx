import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export const BarChart = (props: any) => {
    return (
        <div style={{ height: props.height }}>
            <ResponsiveBar
                data={props.data}
                keys={props.keys}
                indexBy={props.indexBy}
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                padding={0.1}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
}

export default BarChart;