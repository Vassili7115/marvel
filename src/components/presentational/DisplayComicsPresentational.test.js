import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DisplayComicsPresentational from './DisplayComicsPresentational';

configure({ adapter: new Adapter() });

const props = {
  list: [{
    id: '1',
    title: 'Iron Man',
    thumbnail: {
      path: 'https://www.ludoviccareme.com/files/image_211_image_fr',
      extension: 'jpg',
    },
  }],
  getList: jest.fn(),
};

describe('DisplayComicsPresentational component', () => {
  it('DisplayComicsPresentational snapshot', () => {
    const wrapper = mount(
      <DisplayComicsPresentational {...props} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
