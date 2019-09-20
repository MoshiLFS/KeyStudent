import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisualDisplayHeader from './visualDisplayHeader'
import Echarts from '../../../components/statisticalChart'
import style from '../index.less'

class VisualDisplayMain extends Component {
    state = {  };

    render() {

        return (
            <div className={style.visualDisplayMain}>
                <VisualDisplayHeader {...this.props}/>
                <Echarts/>
            </div>
        );
    }
}

export default VisualDisplayMain;