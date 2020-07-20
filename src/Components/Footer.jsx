import React from 'react';
import MyInfo from '../data/MyInfo'

class Footer extends React.Component{

    renderContact() {
        let list = [];
        let contact = [
            { label: '', icon: 'envelope icon', value: MyInfo.email, link: 'mailto:'+MyInfo.email },
            { label: '', icon: 'phone icon', value: MyInfo.phone, link: null },
            { label: '', icon: 'github icon', value: 'Github', link: MyInfo.Github },
            { label: '', icon: 'linkedin icon', value: 'Linkin', link: MyInfo.Linkedin },

        ]
        contact.forEach((c, k) => {
            if (c.link) {
                list.push(
                    <div class="item" key={k}>
                        <i class={c.icon}></i>
                        <div class="content">
                            <a href={c.link}>{c.value}</a>
                        </div>
                    </div>
                )
            } else {
                list.push(
                    <div class="item" key={k}>
                        <i class={c.icon}></i>
                        <div class="content">
                            {c.value}
                        </div>
                    </div>
                )
            }
        })
        return (
            <div class="ui list inverted">
                {list}
            </div>
        )
    }
    render(){
        return (
            <div className="ui inverted vertical segment mt-5 py-5">
                <div className="ui container">
                    <div className="ui inverted divided equal height stackable grid">
                        <div className="three wide column"></div>

                        <div className="three wide column"> </div>
                        <div className="three wide column">
                            <h4 className="ui inverted header">Sitemap</h4>
                            <div className="ui inverted link list">
                                <a href="/projects" className="item">Projects</a>
                                <a href="/resume" className="item">Resume</a>
                            </div>
                        </div>
                      
                        <div className="four wide column">
                            <h4 className="ui inverted header">Contact</h4>
                            {this.renderContact()}
                        </div>
                        <div className="three wide column"></div>
                    </div>

                    <div className="ui center aligned grid pt-3">
                          <p >&copy; 2020 by Ivan Chen. </p>
                          
                     </div>
                    <div className="ui center aligned grid">
                         <p>This website is built with React.js</p>
                     </div>
                    
                </div>
            </div>
        )
    }
}


export default Footer;