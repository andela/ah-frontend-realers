import React from 'react';
import { mount } from 'enzyme';
import UserProfile from '../components/UserProfile';

jest.mock('../containers/withUserProfile', () => C => p => <C {...p} />);

const mockUser = {
  bio: 'This is a user bio',
  firstName: 'Emmerson',
  lastName: 'sonibil',
  dateOfBirth: '02/02/1999',
  gender: 'Male',
  place: 'kabalagala',
  image: 'path/to/image',

};

describe('UserProfile component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<UserProfile user={mockUser} />);
  });
  it('should render without crushing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should render the user\'s first name', () => {
    expect(wrapper.text()).toContain(mockUser.firstName);
  });
  it('should render the user\'s last name', () => {
    expect(wrapper.text()).toContain(mockUser.lastName);
  });
  it('should render the user bio', () => {
    expect(wrapper.text()).toContain(mockUser.bio);
  });
  it('should render the user\'s date of birth', () => {
    expect(wrapper.text()).toContain(mockUser.dateOfBirth);
  });
  it('should render the user\'s gender', () => {
    expect(wrapper.text()).toContain(mockUser.gender);
  });
  it('should should render the user\'s location', () => {
    expect(wrapper.text()).toContain(mockUser.place);
  });
  it('should should render an articles icon', () => {
    const articlesIcon = wrapper.find('span.glyphicon-comment');
    expect(articlesIcon).toHaveLength(1);
  });
  it('should render a favorites icon', () => {
    const favoritesIcon = wrapper.find('span.glyphicon-heart');
    expect(favoritesIcon).toHaveLength(1);
  });
  it('should render followers button', () => {
    const followersButton = wrapper.find('button')
      .filterWhere(btn => btn.text() === 'Followers');
    expect(followersButton).toHaveLength(1);
  });
  it('should render following button', () => {
    const followingButton = wrapper.find('button')
      .filterWhere(btn => btn.text() === 'following');
    expect(followingButton).toHaveLength(1);
  });
  it('should should have edit button', () => {
    const editButton = wrapper.find('button')
      .filterWhere(btn => btn.text() === 'Edit your profile');
    expect(editButton).toHaveLength(1);
  });
  it(`should render the image located at ${mockUser.image}`, () => {
    const image = wrapper.find('img');
    expect(image).toHaveLength(1);
    expect(image.props().src).toBe(mockUser.image);
  });
});
