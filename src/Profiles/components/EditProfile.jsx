import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import withEditProfile from '../containers/withEditProfile';
import '../CSS/EditProfile.scss';
import { storage } from '../../commons/Util/FirebaseConfig';

const Loader = require('react-loader');

export const EditProfile = ({
  user,
  onSubmit,
  isLoading,
}) => {
  const [userProfile, setProfile] = useState({ ...user });

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      // console.log('beforeeeee', userProfile);
      setProfile({ ...userProfile, image });

      console.log('afterrr', userProfile.image.name);
    }
  };

  const handleUpload = () => {
    const { image } = userProfile;
    const uploadTask = storage.ref(`images/${image.name}`);
    uploadTask.put(image).then(() => {
      // Get URL and store to pass
      uploadTask.getDownloadURL().then((result) => {
        console.log('herer ialall', result);
        setProfile({ ...userProfile, image: result });
      });
    });
  };

  return (
    <Fragment>
      <div className="edit-container">
        <h3>Edit Profile</h3>
        <div className="name">
          <input
          id="firstname"
          value={userProfile.firstName}
          placeholder="First name"
          onChange={(e) => {
            setProfile({ ...userProfile, firstName: e.target.value });
          }}
        />
          <input
        id="lastname"
        value={userProfile.lastName}
        placeholder="Last name"
        onChange={(e) => {
          setProfile({ ...userProfile, lastName: e.target.value });
        }}
        />
        </div>
        <div className="textarea">
          <textarea
        id="bio"
        value={userProfile.bio}
        placeholder="Bio"
        onChange={(e) => {
          setProfile({ ...userProfile, bio: e.target.value });
        }}
        />
        </div>
        <div className="loc-gender">
          <input
        id="location"
        value={userProfile.place}
        placeholder="location"
        onChange={(e) => {
          setProfile({ ...userProfile, place: e.target.value });
        }}
         />
          <input
        id="gender"
        value={userProfile.gender}
        placeholder="gender"
        onChange={(e) => {
          setProfile({ ...userProfile, gender: e.target.value });
        }}
         />
          <div id="gender-error" />
        </div>
        <div className="d-o-b-button">
          <div className="d-o-b">
            <input
        id="date-of-birth"
        value={userProfile.dateOfBirth}
         placeholder="Birth date"
         onChange={(e) => {
           setProfile({ ...userProfile, dateOfBirth: e.target.value });
         }}
          />
            <div id="d-o-b" />
          </div>
          <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
          </div>
          <div>
            <Loader loaded={!isLoading}>
              <button
        onClick={() => {
          onSubmit({
            first_name: userProfile.firstName,
            last_name: userProfile.lastName,
            bio: userProfile.bio,
            gender: userProfile.gender,
            location: userProfile.place,
            birth_date: userProfile.dateOfBirth,
            image: userProfile.image,
          });
        }}
        >
          Save
              </button>
            </Loader>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    gender: PropTypes.string,
    dateOfBirth: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
};

export default withEditProfile(EditProfile);
