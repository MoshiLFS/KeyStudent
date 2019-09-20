import React,{ useState, useEffect } from 'react';
import { Switch,Button } from 'antd';
import 'antd/dist/antd.css';
import echarts from 'echarts';
let onChange=(checked)=>{
    console.log(`switch to ${checked}`);
}

let allmyChart = null;
const President=props=>{
    console.log('props!!!!!!!!!!!!!!',props);
        const option = {
            title: {
                text: 'xxx同学的日周考成绩统计图',
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['技能', '理论']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar', 'stack', 'tiled',] },
                    restore: {},
                    myTool1: {
                        show: true,
                        title: '自定义扩展方法1',
                        icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                        onclick:()=>{
                            console.log(allmyChart)
                        }
                    },
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '技能',
                    type: 'line',
                    stack: '总量',
                    data: [23, 70, 21, 25, 76.7, 36.5, 61, 37, 20, 9, 22, 10, 90]
                },
                {
                    name: '理论',
                    type: 'line',
                    stack: '总量',
                    data: [26, 70, 26, 25, 76.7, 82.2, 61, 37, 20, 9, 22, 13, 56]
                }
            ]
        };
    useEffect(() => {
        var myChart = echarts.init(document.getElementById('line'));
        // var myChart1 = echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption(option);
        allmyChart = myChart;
        // myChart1.setOption(options);
    })
        return (
            <div className="wrap">
                <div className="page_bottom">
                    <div className="bar">
                        <div id="line" style={{ width: '100%', height: '400px' }}></div>
                    </div>
                </div>
            </div>
        );
    }

export default (President);