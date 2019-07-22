import React from 'react';
import PropTypes from 'prop-types';
import withUserProfile from '../containers/withUserProfile';
import '../CSS/Profiles.scss';

const UserProfile = ({
  user: {
    firstName,
    lastName,
    bio,
    dateOfBirth,
    gender,
    place,
    image,
  },
}) => (
  <div className="profile-container">
    <div id="header">
      <div className="user-name-image">
        <img src={image} alt="" />
        <h3>
          <b>
            {firstName}
            {' '}
            {lastName}
          </b>

        </h3>
      </div>

      <div className="follow-button">
        <button className="follow">Followers</button>
        <button className="follow">following</button>
      </div>
    </div>
    <div className="bio-other-details">
      <div className="bio">
        <p>Bio: </p>
        <div>{bio}</div>
      </div>
      <div className="other_details">
        <div className="date-of-birth">
          <p>Date of birth:</p>
          <div>{dateOfBirth}</div>
        </div>
        <div className="gender">
          <p>Gender:</p>
          <div>{gender}</div>
        </div>
        <div className="place">
          <p>place:</p>
          <div>{place}</div>
        </div>
        <div className="hearts">
          <span className="glyphicon glyphicon-heart" />
          <p>Favorites</p>
        </div>
        <div className="comments">
          <span className="glyphicon glyphicon-comment" />
          <p>Articles</p>
        </div>
      </div>
    </div>
    <div className="edit">
      <button><a href="/EditProfile">Edit your profile</a></button>
    </div>
  </div>
);

UserProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    dateOfBirth: PropTypes.string,
    gender: PropTypes.string,
    place: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default withUserProfile(UserProfile);
