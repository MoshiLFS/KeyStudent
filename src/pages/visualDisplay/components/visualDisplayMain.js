import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisualDisplayHeader from './visualDisplayHeader'
import style from '../index.less'

class VisualDisplayMain extends Component {
    state = {  };

    render() {
        return (
            <div className={style.visualDisplayMain}>
                <VisualDisplayHeader/>
            </div>
        );
    }
}

export default VisualDisplayMain;