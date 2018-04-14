// @flow

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Error from 'components/Error';
import Experience from 'components/Experience';
import 'styles/Main.css';

type Props = {
    location: Object
};

var limit = 18;
var skip = 0;

const ALL_EXPERIENCES = gql`
    query allExperiences($limit: Int, $skip: Int){
        experiences(limit: $limit, skip: $skip) {
            id,
            name,
            tagline,
            imageMedium {
                file
            }
        }
    }
`;

export default class AllExperiences extends Component<Props> {

    cachedContent: Object;

    constructor(props: Object) {
        super(props);
        this.cachedContent = <div/>;
        if(typeof(this.props.location.state) !== "undefined") {
            limit = 15;
            skip = 3;
            this.cachedContent = (
                this.props.location.state.data.experiences.map(({ id, name, tagline, imageMedium }) => (
                    <Experience key={id} id={id} name={name} tagline={tagline} image={imageMedium.file}/>
                ))
            );
        } else {
            limit = 18;
            skip = 0;
        }
    }

    render() {
        return (
            <div className="ltdmvr-main-wrapper">
                <Header/>
                <h1 className="ltdmvr-main-title">Experience Library</h1>
                <div className="ltdmvr-content-wrapper">
                    {this.cachedContent}
                    <Query query={ALL_EXPERIENCES} variables={{limit, skip}}>
                        {({ loading, error, data }) => {
                            if (loading) return <Loading/>;
                            if (error) return <Error/>;
                            return data.experiences.map(({ id, name, tagline, imageMedium }) => (
                                <Experience key={id} id={id} name={name} tagline={tagline} image={imageMedium.file}/>
                            ));
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}
