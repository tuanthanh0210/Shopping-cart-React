import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className='Search' style={{width: `${this.props.width}px`}}>
                <img width={32} height={32} src="https://www.flaticon.com/premium-icon/icons/svg/2732/2732705.svg" alt=""/>
                <input type="text" placeholder='Bạn muốn ăn gì... ?'/>
            </div>
        )
    }
}
