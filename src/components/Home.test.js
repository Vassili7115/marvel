import React from 'react';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

configure({ adapter: new Adapter() });

describe('Home component', () => {
  it('Home snapshots', () => {
    const wrapper = mount(
      <Home />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
