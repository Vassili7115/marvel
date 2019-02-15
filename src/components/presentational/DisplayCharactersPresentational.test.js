import React from 'react';
import { mount, configure } from 'enzyme';
// import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DisplayCharactersPresentational from './DisplayCharactersPresentational';

configure({ adapter: new Adapter() });


const props = {
  characters: [{
    id: '1',
    name: 'Iron Man',
    thumbnail: {
      path: 'https://www.ludoviccareme.com/files/image_211_image_fr',
      extension: 'jpg',
    },
  }],
  getList: jest.fn(),
};

describe('DisplayCharactersPresentational component', () => {
  // test('renders', () => {
  //   const wrapper = shallow(<DisplayCharactersPresentational />);
  //   expect(wrapper.exists()).toBe(true);
  // });

  it('DisplayCharactersPresentational snapshot', () => {
    const wrapper = mount(
      <DisplayCharactersPresentational {...props} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
