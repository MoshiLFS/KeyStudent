import React from 'react'
import {connect} from 'dva'
import Login from '../pages/login'
import AllAchievements from '../pages/allAchievements'
import DeansPerspective from '../pages/deansPerspective'
import VisualDisplay from '../pages/visualDisplay'

export default [
    {path: '/login', component :Login }, //登录注册
    {path: '/allAchievements', component :AllAchievements }, // 所有成绩
    {path: '/deansPerspective', component :DeansPerspective }, // 院长视图
    {path: '/visualDisplay', component :VisualDisplay }, //可视化视图
    {path: '/', redirect: '/visualDisplay'}
]