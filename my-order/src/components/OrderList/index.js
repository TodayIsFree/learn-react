import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const data = [
    {
    id:1,
    shop:"猛龙",
    picture:"",
    product:"爱昂纳德",
    price:19.9,
    ifCommented:true,
},{
    id:2,
    shop:"雄鹿",
    picture:"",
    product:"字母哥",
    price:18,
    ifCommented:true,
},{
    id:3,
    shop:"火箭",
    picture:"",
    product:"哈登",
    price:20,
    ifCommented:true,
},{
    id:4,
    shop:"掘金",
    picture:"",
    product:"约老师",
    price:18,
    ifCommented:true,
}
]

class OrderList extends Component {
    render() {
        return (
            <div>
                {
                    data.map(item => {
                        return <OrderItem key = {item.id} data={item}/>
                    })
                }
            </div>
        );
    }
}

export default OrderList;