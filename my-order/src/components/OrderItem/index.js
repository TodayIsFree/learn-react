import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state={
            editing:true,
            stars:0
        }
    }
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
                {this.state.editing ? this.renderEditArea():null}
            </div>
        );
    }

    renderEditArea() {
        return(
            <div className='orderItem_commentContainer'>
                <textarea className='orderItem_comment'/>
                {this.renderStars()}
                <button className='orderItem_btn orderItem_btn--red'>提交</button>
                <button className='orderItem_btn orderItem_btn--grey'>取消</button>
            </div>
        )
    }

    renderStars(){
        const { stars} =this.state;
        return(
            <div>
                {
                    [1,2,3,4,5].map((item,index)=> {
                        const light = stars > item ? "orderItem_star--lignt":"";
                        return(
                            <span key={index}>★</span>
                        )
                    })
                }
            </div>
        )
    }

}

export default OrderItem;