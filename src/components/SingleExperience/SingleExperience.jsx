// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const SINGLE_EXPERIENCE = gql`
    query singleExperience($experienceId: ID!){
        experience(id: $experienceId) {
            name,
            description,
            imageMedium {
                file
            },
            scenes(limit: 18) {
                id,
                name,
                tagline,
                imageMedium{
                    file
                }
            }
        }
    }
`;

export default class SingleExperience extends Component<Props> {
    render() {
        var experienceId = this.props.location.state.experienceId;
        var experienceName = this.props.location.state.experienceName;
        return (
            <div className="ltdmvr-main-wrapper">
                <Header/>
                <div className="back-exp">
                    <Link to='/experiences'>
                        <div className="ltdmvr-exp-btn">Back to Experience Library</div>
                    </Link>
                </div>
                <h1 className="ltdmvr-main-title">{experienceName}</h1>
                <div className="ltdmvr-content-wrapper">
                    <Query query={SINGLE_EXPERIENCE} variables={{ experienceId }}>
                        {({ loading, error, data }) => {
                            if (loading) return <Loading/>;
                            if (error) return <Error/>;
                            return(
                                <div>
                                    <div className="individual-exp-desc">{data.experience.description}</div>
                                    {data.experience.scenes.map(({ id, name, tagline, imageMedium }) => (
                                        <Experience key={id} id={id} name={name} tagline={tagline} image={imageMedium.file} isScene={true}/>
                                    ))}
                                </div>
                            );
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}
