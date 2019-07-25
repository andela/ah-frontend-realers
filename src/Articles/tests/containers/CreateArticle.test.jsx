import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CreateArticle, mapStateToProps } from '../../containers/CreateArticle';

let mockedState = {
  isFieldInvalid: {
    title: false,
    body: false,
    tags: false,
  },
  articleTitle: 'hello',
  articleBody: 'body',
  articleTags: 'body, boys',
  articlePhoto: {
    name: 'No Photo selected',
    data: null,
  },
};


// test
describe('CreateArticle Component', () => {
  const props = {
    errorOccured: { errorMessage: { errors: { body: [] } } },
    isPosting: false,
    isArticlePosted: false,
    postAnArticle: jest.fn(),
  };
  const wrapper = shallow(<CreateArticle {...props} />);

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should text input Change for title', () => {
    const event = {
      target: {
        value: 'New',
        name: 'articleTitle',
      },
    };
    const instance = wrapper.instance();

    instance.handleChange(event);
    expect(instance.state.isFieldInvalid.title).toBe(true);
    expect(instance.state.articleTitle).toBe('New');

    event.target.value = 'New Item';
    instance.handleChange(event);
    expect(instance.state.articleTitle).toBe('New Item');
    expect(instance.state.isFieldInvalid.title).toBe(false);
  });

  it('should image input Change', () => {
    const event = {
      target: {
        value: 'New photo',
        name: 'articlePhoto',
        files: ['image.png'],
      },
    };
    const instance = wrapper.instance();
    instance.handleChange(event);
    expect(instance.state.articlePhoto.name).toBe('One Photo Added, click here again to change photo');
    expect(instance.state.articlePhoto.data).toBe('image.png');
  });

  it('should test article body input change', () => {
    const event = {
      target: {
        value: 'I am the new body which is invalid',
        name: 'articleBody',
      },
    };
    const instance = wrapper.instance();

    instance.handleChange(event);
    expect(instance.state.isFieldInvalid.body).toBe(true);

    event.target.value = 'I am the new body which is valid I am the new body which is valid I am the new body which is valid I am the new body which is invalid I am the new body which is invalid';
    instance.handleChange(event);
    expect(instance.state.isFieldInvalid.title).toBe(false);
  });

  it('should test article tags input change', () => {
    const event = {
      target: {
        value: '2',
        name: 'articleTags',
      },
    };
    const instance = wrapper.instance();

    instance.handleChange(event);
    expect(instance.state.isFieldInvalid.tags).toBe(true);

    event.target.value = 'kampala,uganda';
    instance.handleChange(event);
    expect(instance.state.isFieldInvalid.tags).toBe(false);
  });

  it('should return false when unkown field name is passed', () => {
    const event = {
      target: {
        value: '2',
        name: 'hfhgfg',
      },
    };
    const instance = wrapper.instance();

    instance.handleChange(event);
    expect(instance.state.isFieldInvalid.tags).toBe(false);
  });

  it('should set isFormValid to true/false if all fields are true/false', () => {
    const event = {
      target: {
        value: 'kampala',
        name: 'articleTags',
      },
    };
    const instance = wrapper.instance();
    instance.setState(mockedState);
    instance.handleChange(event);
    expect(instance.state.isFormValid).toBe(true);

    // event.target.value = '';
    // instance.handleChange(event);
    // console.log('instance.state',event.target.value);
    // // expect(instance.state.isFormValid).toBe(false);
  });

  it('on submit fn is called upon form submit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const state = {
      articleTitle: 'hello',
      articleBody: 'I am the new body for you',
      articleTags: 'body, boys',
      articlePhoto: {
        data: null,
        name: 'No Image',
      },
    };
    const instance = wrapper.instance();
    instance.setState(state);
    instance.handleCreateArticle(event);

    expect(props.postAnArticle).toHaveBeenCalled();
  });

  it('should call upload image when form has an image', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const state = {
      isFieldInvalid: { title: false, body: false, tags: false },
      articleTitle: 'hello',
      articleBody: 'I am the new body for you',
      articleTags: 'body, boys',
      articlePhoto: {
        data: new File(['logo'], 'new-logo.png'),
        name: 'new-logo.png',
      },
    };
    const instance = wrapper.instance();
    instance.setState(state);
    instance.handleCreateArticle(event);
    expect(instance.state.articlePhoto.name).toBe('new-logo.png');
  });

  it('should handle form submit with image upload', () => {
    const state = {
      articleTitle: 'hello',
      articleBody: 'I am the new body for you',
      articleTags: 'body, boys',
      articlePhoto: {
        data: new File(['image data'], 'logo.png'),
        name: 'logo.png',
      },
    };
    const instance = wrapper.instance();
    instance.setState(state);
    instance.handleImageUpload();
    expect(instance.state.articlePhoto.name).toBe('logo.png');
  });
});

describe('mapStateToProps', () => {
  it('testing mapStateToProps', () => {
    mockedState = {
      createArticle: {
        status: true,
        isPosting: true,
      },
    };
    const state = mapStateToProps(mockedState);
    expect(state.isPosting).toBe(true);
  });
});
