import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisualDisplayHeader from './visualDisplayHeader'
import Echarts from '../../../components/statisticalChart'
import style from '../index.less'

class VisualDisplayMain extends Component {
    state = { 
        data:[
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
            },
        ],
        isBar : false,
    };

    handleClickAdd(){
        let { studentName, studentMoban, jieduizi } = this.refs;
        console.log(studentName.value);
    }

    render() {
        let {data} = this.state;
        return (
            <div className={style.visualDisplayMain}>
                <VisualDisplayHeader {...this.props}/>
                <div className='addStudent'>
                    <span>添加学生:</span>
                    <input placeholder='输入姓名' ref='studentName'/>
                    <input placeholder='末位次数' ref='studentMoban'/>
                    <input placeholder='结对子，帮扶对象' ref='jieduizi'/>
                    <button onClick={this.handleClickAdd.bind(this)}>添加</button>
                </div>
                <Echarts data={data}/>
            </div>
        );
    }
}

export default VisualDisplayMain;