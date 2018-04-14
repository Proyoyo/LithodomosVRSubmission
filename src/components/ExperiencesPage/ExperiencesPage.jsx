// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllExperiences from 'components/AllExperiences';
import SingleExperience from 'components/SingleExperience';

const ExperiencesPage = () => (
    <Switch>
        <Route exact path='/experiences' component={AllExperiences}/>
        <Route path='/experiences/:experienceId' component={SingleExperience}/>
    </Switch>
)

export default ExperiencesPage;
