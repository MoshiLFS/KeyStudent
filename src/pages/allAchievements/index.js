import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Header from '../../components/header';
import styles from './index.css';
class AllAchievements extends Component {
    
    state = {};
    
    render() {
        const columns = [     
            {
              title: '日期',
              dataIndex: 'name',
            
            },
            {
              title: '理论',
              dataIndex: 'age',
            },
            {
              title: '技能',
              dataIndex: 'address',
            },
            {
                title: '分析和解决',
                dataIndex: 'name1',
              },
              {
                title: '是否周考',
                dataIndex: 'age1',
              },
              {
                title: '操作',
                dataIndex: 'address1',
              },
          ];
          const data = [
            {
              key: '1',
              name: '11-0000',
              age: 89,
              address: 'Tedffaddf',
              name1: '就开始不讲课背带裤决定吧德生科技',
              age1: "否",
              address1: '删除',
            },
            {
                key: '2',
                name: '11-0000',
                age: 89,
                address: 'Tedffaddf',
                name1: '就开始不讲课背带裤决定吧德生科技',
                age1: "否",
                address1: '删除',
              },
              {
                key: '3',
                name: '11-0000',
                age: 89,
                address: 'Tedffaddf',
                name1: '就开始不讲课背带裤决定吧德生科技',
                age1: "否",
                address1: '删除',
              },
              {
                key: '4',
                name: '11-0000',
                age: 89,
                address: 'Tedffaddf',
                name1: '就开始不讲课背带裤决定吧德生科技',
                age1: "否",
                address1: '删除',
              },
          ];
          const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };
        return (
            <div>
                <Header title='xx学生日周考成绩统计表'/>
                <div className={styles.box}>
                    <div className={styles.nav}>
                        <div className={styles.left}>
                            <span className={styles.teacher}>讲师：XXX</span>
                            <span className={styles.stduent}>学生：XXX</span>
                        </div>
                        <div className={styles.right}>
                            <select className={styles.choose}>
                                <option>快捷选择其他学生</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.wrap}>
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </div>

                    <div className={styles.wrap1}>
                            <div className={styles.left1}>

                            </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default AllAchievements;



