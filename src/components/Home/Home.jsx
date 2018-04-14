// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from "graphql-tag";
import Header from 'components/Header';
import Loading from 'components/Loading';
import Error from 'components/Error';
import Experience from 'components/Experience';
import 'styles/Main.css';

type Props = {};

const FEATURED_EXPERIENCES = gql`
    query featuredExperiences{
        experiences(limit: 3) {
            id,
            name,
            tagline,
            imageMedium {
                file
            }
        }
    }
`;

export default class Home extends Component<Props> {

    render() {
        return (
            <div className="ltdmvr-main-wrapper">
                <Header/>
                <h1 className="ltdmvr-main-title">Featured Experiences</h1>
                <div className="ltdmvr-content-wrapper">
                    <Query query={FEATURED_EXPERIENCES}>
                        {({ loading, error, data }) => {
                            if (loading) {
                                return (
                                    <div>
                                        <Loading/>
                                        <div className="view-all-exp">
                                            <Link to='/experiences'>
                                                <div className="ltdmvr-exp-btn">View all experiences</div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            }
                            if (error) {
                                return <Error/>;
                            }
                            return (
                                <div>
                                    {data.experiences.map(({ id, name, tagline, imageMedium }) => (
                                        <Experience key={id} id={id} name={name} tagline={tagline} image={imageMedium.file}/>
                                    ))}
                                    <div className="view-all-exp">
                                        <Link to={{
                                            pathname: '/experiences',
                                            state: {data}
                                            }}>
                                            <div className="ltdmvr-exp-btn">View all experiences</div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}
