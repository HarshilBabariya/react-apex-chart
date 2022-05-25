import React from 'react';
import Chart from 'react-apexcharts';

const Bubble = (props: any) => {

    // function to find max of the X-Axis
    const maxXValue = (value: any) => {
        const tamp = value.reduce((id: any, item: any) => id = id > item.x ? id : item.x, 0);
        return (Math.floor(tamp / 10) * 10) + 10;
    };

    // function to find max of the Y-Axis
    const maxYValue = (value: any) => {
        const tamp = value.reduce((id: any, item: any) => id = id > item.y ? id : item.y, 0);
        return (Math.floor(tamp / 10) * 10) + 10;
    };

    // set options for the graph
    var options: any = {
        chart: {
            height: 400,
            type: 'bubble',
        },
        fill: {
            opacity: 0.8,
            colors: '#9C27B0'
        },
        title: {
            text: 'Data Bubble Chart'
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
            min: 0,
            max: maxXValue(props.data)
        },
        yaxis: {
            min: 0,
            max: maxYValue(props.data)
        }
    };

    // set the graph data
    const series: any = [
        {
            name: "name",
            data: props.list
        }
    ];

    return (
        <>
            <div>
                <Chart options={options} series={series} type="bubble" height={400} />
            </div>
        </>
    )
}

export default Bubble;