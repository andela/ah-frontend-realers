import React from 'react';
import { shallow } from 'enzyme';
import ViewArticleComponent from '../components/VeiwArticleComponent';


describe('ViewArticleComponent', () => {
  const props = {
    moment: jest.fn(),
    singleArticle: {
      title: 'Logged in',
      description: 'You can close this page and return to your CLI. It should now be logged in.',
      body: 'You can close this page and return to your CLI. It should now be logged in.',
      createdAt: '2019-07-22T05:19:22.188734Z',
      updatedAt: '2019-07-22T05:19:22.188788Z',
      author: {
        email: 'alexxsanya@gmail.com',
        username: 'alexxsanya',
        bio: '',
        image: '',
        gender: 'male',
        first_name: 'Alex',
        last_name: 'Sanya',
        location: '',
        birth_date: null,
      },
      slug: 'logged-in',
      image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-realers.appspot.com/o/article-image%2Fheroku.png?alt=media&token=f9f6d723-c7d4-4df3-b4de-d1e84a5222bf',
      average_rating: 0,
      tagName: [
        'heroku',
      ],
    },
  };
  it('render the viewArticle component', () => {
    const wrapper = shallow(<ViewArticleComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
