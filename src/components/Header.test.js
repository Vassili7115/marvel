import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
  test('renders', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
