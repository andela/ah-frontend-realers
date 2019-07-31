import {
  compose, withHandlers, branch, renderNothing,
} from 'recompose';
import Store from '../../Mainstore/Store';
import withUserProfile from './withUserProfile';
import editProfile from '../redux/actions/EditProfileAction';

const onSubmitHandler = () => (data) => {
  editProfile(data)(Store.dispatch);
};

const onlyWithUserProfile = hasNoValidProfile => branch(
  hasNoValidProfile,
  renderNothing,
);

export default compose(
  withUserProfile,
  withHandlers({
    onSubmit: onSubmitHandler,
  }),
  onlyWithUserProfile(({ user }) => !(user && user.username)),
);
