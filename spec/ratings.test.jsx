import React from 'react'
import {mount, shallow} from 'enzyme'

import Ratings from '../client/components/ratings';

describe('check state is updated', () => {
  let ratings = {};
  ratings['Overall'] = 5;
  ratings['Communication'] = 5;
  ratings['Check-in'] = 5;
  ratings['Cleanliness'] = 5;
  ratings['Accuracy'] = 5;
  ratings['Location'] = 5;
  ratings['Value'] = 5;

  const wrapper = mount(<Ratings ratings={ratings} />); // mount/render/shallow when applicable

  it('check if state is defined', () => {
    expect(wrapper.props().ratings).toBeDefined();
    expect(wrapper.props().ratings['Overall']).toEqual(5);
    expect(wrapper.props().ratings['Communication']).toEqual(5);
    expect(wrapper.props().ratings['Check-in']).toEqual(5);
    expect(wrapper.props().ratings['Cleanliness']).toEqual(5);
    expect(wrapper.props().ratings['Accuracy']).toEqual(5);
    expect(wrapper.props().ratings['Location']).toEqual(5);
    expect(wrapper.props().ratings['Value']).toEqual(5);
  });
});