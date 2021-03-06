import React from 'react';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header snapshott', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Header />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
