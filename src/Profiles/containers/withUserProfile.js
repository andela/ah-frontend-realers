/* eslint-disable camelcase */
import {
  compose, lifecycle, mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import Store from '../../Mainstore/Store';
import getUserProfile from '../redux/actions/UserProfileAction';

const mapStateToProps = ({ userProfiles: { profile } }) => ({ 
  ...profile, 
  place: profile.location, // prevent name collision with the location prop from the react-router
});

export default compose(
  lifecycle({
    componentDidMount() {
      getUserProfile()(Store.dispatch);
    },
  }),
  connect(mapStateToProps),
  mapProps(({
    first_name,
    last_name,
    birth_date,
    place,
    bio,
    ...rest
  }) => ({
    user: {
      firstName: first_name,
      lastName: last_name,
      dateOfBirth: birth_date,
      place,
      bio,
      ...rest,
    },
  })),
);
