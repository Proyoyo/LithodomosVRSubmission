// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css'

type Props = {
    id: number,
    name: string,
    tagline: string,
    image: string,
    isScene?: boolean
};

export default class Experience extends Component<Props> {
    render() {
        var imageUrl = 'http://assets.lithodomosvr.com/' + this.props.image;
        var experienceId = this.props.id;
        var experienceName = this.props.name;
        if(this.props.isScene) {
            return (
                <div className="Experience-wrapper">
                    <div className="Experience" style={{ backgroundImage: `url(${imageUrl})`}}>
                        <div className="Experience-content">
                            <div className="Experience-text">
                                <div>{this.props.name}</div>
                                <div>{this.props.tagline}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="Experience-wrapper">
                <Link to={{
                        pathname: '/experiences/' + this.props.id,
                        state: {experienceId, experienceName}
                        }}>
                    <div className="Experience" style={{ backgroundImage: `url(${imageUrl})`}}>
                        <div className="Experience-content">
                            <div className="Experience-text">
                                <div>{this.props.name}</div>
                                <div>{this.props.tagline}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
