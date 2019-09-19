import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import style from '../index.less'



function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

class VisualDisplayHeader extends Component {
    state = { classArr : ['1703C','1703E','1703E'], ind: 0 };

    

    render() {
        let { classArr, ind } = this.state;
        return (
            <>
                <div className={style.visualDisplayHeader}>
                    <span>切换班级</span>
                    {
                        classArr && classArr.map((item,index)=> {
                            if(index == ind){
                                return <p className={style.isClick}>{item}</p>
                            }else{
                                return <p className={style.noClick}>{item}</p>
                            }
                        })
                    }
                    <div className={style.mbutton}>
                        <Switch defaultChecked onChange={onChange} /> 柱状图/线图
                    </div>
                </div>
                
                
            </>
        );
    }
}

export default VisualDisplayHeader;