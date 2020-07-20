import React from 'react';

import {
    Link
} from 'react-router-dom'

class Menu extends React.Component{

    state = {
        title: "Ivan's Website",
        menuItems: [
           
            { lable: 'Resume', url: '/resume', active: false },
        ]
    }
  
    renderItems() {
        let list = []
        this.state.menuItems.forEach((i, k) => {
            list.push(
                <div key={k}>
                    <Link to={i.url} className={i.active ? 'item active' : 'item'}>
                        {i.lable}
                    </Link>
                </div>
            )
        })
        return list;
    }
    render(){
        return (
            <div>
               <div className="ui inverted borderless menu big " style={{ backgroundColor: '#204265 ' }}>
                    <div className="ui container">
                        <div className="header item p-0 m-0">
                             {this.state.title}
                        </div>
                        <div className="right menu">
                            {this.renderItems()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;