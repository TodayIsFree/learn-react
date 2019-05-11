import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
    render() {
        const { shop,product,price,picture,ifCommented } = this.props.data;
        return (
            <div className='orderItem'>
                <div className='orderItem_picContainer'>
                    <img className='orderItem-pic' src={picture} />
                </div>
                <div className='orderItem_content'>
                    <div className='orderItem_product'>{product}</div>
                    <div className='orderItem_shop'>{shop}</div>
                    <div className='orderItem_detail'>
                        <div className='orderItem_price'>{price}</div>
                        <div>
                            {
                                ifCommented ? (
                                <button className='orderItem_btn orderItem_btn--grey'>
                                    已评价
                                    </button>
                                ):(
                                    <button className='orderItem_btn orderItem_btn--red'>
                                    评价
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;