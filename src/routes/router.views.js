import React from 'react'
import {Route, Redirect} from 'dva/router'
export default function RouterViews(props){
    let {routers} = props;
    let routerArr = routers.filter(item=> !item.redirect);
    let redirectArr = routers.filter(item=> item.redirect).map((item, index)=> <Redirect from={item.path} key={index} to={item.redirect}/>);
    return <>
        {
            routerArr && routerArr.map((item, index)=> <Route path={item.path} key={index} render={(props)=>{
                return item.children ? <item.component {...props} children={item.children} /> :
                    <item.component {...props} />
            }}/>).concat(redirectArr)
        }
    </>
}

