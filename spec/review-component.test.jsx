import React from 'react'
import {mount, shallow} from 'enzyme'

import ReviewComponent from '../client/components/review-component';

describe('check state is updated', () => {
  const wrapper = mount(<ReviewComponent />); // mount/render/shallow when applicable
  // window.history.pushState({}, 'Reviews', '/5');

  it('check if state is defined', () => {
    expect(wrapper.state().page).toBeDefined();
    expect(wrapper.state().reviews).toBeDefined();
    expect(wrapper.state().count).toBeDefined();
    expect(wrapper.state().ratings).toBeDefined();
  });

  /*
  it('check to make sure ratings are defined', () => {
    expect(wrapper.state().ratings.overall).toBeDefined();
    expect(wrapper.state().ratings.communication).toBeDefined();
    expect(wrapper.state().ratings.check_in).toBeDefined();
    expect(wrapper.state().ratings.cleanliness).toBeDefined();
    expect(wrapper.state().ratings.accuracy).toBeDefined();
    expect(wrapper.state().ratings.location).toBeDefined();
    expect(wrapper.state().ratings.value).toBeDefined();
  });
  */
});