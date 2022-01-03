import React, { Component } from 'react';
import './Actors.css'

class Actor extends Component {
    render() {
        return (
            <div>

                <article className="post">
                    <h4>{this.props.actor}</h4>
                    <div>{this.props.actor}</div>
                    <div className="media">
                        <div className="media-left">
                            <p className="image is-32x32">
                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                            </p>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                                    <span className="tag"></span>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 1</span>
                        </div>
                    </div>
                </article>

            </div>
        );
    }
}

export default Actor