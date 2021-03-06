import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DisplayCharactersPresentational from './DisplayCharactersPresentational';

configure({ adapter: new Adapter() });

const props = {
  list: [{
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
  it('DisplayCharactersPresentational snapshot', () => {
    const wrapper = mount(
      <DisplayCharactersPresentational {...props} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
