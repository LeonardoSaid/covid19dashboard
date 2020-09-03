import React, { useState } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import worldCountries from '../../../mock/nivo/world_countries.json';

export const GeoChart = (props: any) => {

    const [zoom, setZoom] = useState(80);

    return (
        <div style={{ height: props.height }}>
            <span style={{ position: 'absolute', top: 0, left: 0}}><button onClick={() => {
                if(zoom >= 120)
                    setZoom(80)
                else
                    setZoom(zoom+10)
            }}>asd</button></span>
            <ResponsiveChoropleth
                data={props.data}
                features={worldCountries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                projectionScale={zoom}
                enableGraticule={true}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
            />
        </div>
    );
}

export default GeoChart;