import React from 'react';

import { mount } from 'enzyme';

import Pagination from '../../components/paginationComponent';
import Button from '../../../commons/components/Button';

describe('Pagination', () => {
  const props = {
    previous: null,
    next: 'next',
    paginate: jest.fn(),
    count: 20,
  };
  let wrapper = mount(<Pagination {...props} />);

  it('this should render without a problem', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const prevButton = wrapper.find(Button).at(0);
  const nxtButton = wrapper.find(Button).at(1);

  it('should disable buttons if null', () => {
    expect(prevButton.props().disabled).toBe(true);
    expect(nxtButton.props().disabled).toBe(false);
  });


  it('should call the paginate function on button click', () => {
    const event = {
      target: {
        type: 'button',
        name: '',
      },
      preventDefault: jest.fn(),
    };

    nxtButton.simulate('click', event);
    expect(props.paginate).toBeCalled();
    prevButton.simulate('click', event);


    props.previous = 'previous';
    wrapper = mount(<Pagination {...props} />);
    wrapper.find(Button).at(0).simulate('click', event);
    expect(props.paginate).toBeCalled();
  });
});