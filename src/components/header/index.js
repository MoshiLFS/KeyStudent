import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.less'

class Header extends Component {
  state = {  };

  render() {
    console.log('props.............',this.props);
    let {title} = this.props; 
  return (
    <div className={style.header}>
        {title}
    </div>
  );
  }
}

export default Header; 