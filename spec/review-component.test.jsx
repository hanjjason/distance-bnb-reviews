import React from 'react'
import {mount, shallow} from 'enzyme'

import ReviewComponent from '../client/components/review-component';

describe('check state is updated', () => {
  const wrapper = mount(<ReviewComponent />); // mount/render/shallow when applicable

  it('check if state is defined', () => {
    expect(wrapper.state().page).toBeDefined();
    expect(wrapper.state().reviews).toBeDefined();
    expect(wrapper.state().count).toBeDefined();
    expect(wrapper.state().ratings).toBeDefined();
  });
});