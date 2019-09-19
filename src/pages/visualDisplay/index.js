import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header'
import VisualDisplayMain from './components/visualDisplayMain'

class VisualDisplay extends Component {
    state = {  };

    render() {
        return (
            <>
                <Header title='重点关注学生考试统计图'/>
                <VisualDisplayMain/>
            </>
        );
    }
}

export default VisualDisplay;