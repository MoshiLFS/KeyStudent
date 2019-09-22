import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header'
import { connect} from 'dva'
import VisualDisplayMain from './components/visualDisplayMain'

class VisualDisplay extends Component {
    state = {  };

    render() {
        return (
            <>
                <Header title='重点关注学生考试统计图'/>
                <VisualDisplayMain classArr ={['1703C','1703E','1703E']} isAdd = 'true'/>
            </>
        );
    }

    componentDidMount(){
        console.log(this.props,'2----------------------------');
    }
}

function mapStateProps(state){
    return {

    }
}

function mapDispatchProps(dispatch){
    return {
        abc(){
            console.log(123);
        }
    }
}

export default connect(mapStateProps,mapDispatchProps)(VisualDisplay);