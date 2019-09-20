import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch,Modal, Button } from 'antd';
import style from '../index.less'



function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

class VisualDisplayHeader extends Component {
    state = {
        ind: 0 , 
        ModalText:  <input type='text'/>,
        visible: false,
        confirmLoading: false,
        isOK : false
    };

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = (e) => {
        this.setState({
          ModalText: '添加成功',
          confirmLoading: true,
          isOk : true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            ModalText : <input type='text'/>,
            confirmLoading: false,
            isOk : false,
          });
        }, 2000);

        console.log(e);
      };
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };

    

    render() {
        let {  ind,visible, confirmLoading, ModalText, isOK } = this.state;
        let {classArr, isAdd} = this.props;
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
                    {
                        isAdd ? <div>
                        <Button type="primary" onClick={this.showModal}>
                          创建班级+
                        </Button>
                        <Modal
                          title="创建班级"
                          visible={visible}
                          onOk={this.handleOk}
                          confirmLoading={confirmLoading}
                          onCancel={this.handleCancel}
                        >
                          
                          {
                              isOK ? <p>{ModalText}</p> : <p>新建班级号:&nbsp;{ModalText}</p>
                          }
                        </Modal>
                      </div>: <></>

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