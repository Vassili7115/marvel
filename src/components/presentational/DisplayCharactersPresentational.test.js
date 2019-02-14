import React from 'react';
// import Enzyme, { shallow, mount } from "enzyme";
import renderer from 'react-test-renderer';
import DisplayCharactersPresentational from './DisplayCharactersPresentational';
// import { getList } from "../../store/actions/listActions.js"
// import Adapter from "enzyme-adapter-react-16";

describe('DisplayCharactersPresentational component', () => {
// test("renders", () => {
//     const wrapper = shallow(<DisplayCharactersPresentational />);
//     expect(wrapper.exists()).toBe(true)
// });
it('renders correctly', () => {
    // const propsBis = {
    //     ...props,
    //     characters: []
    // };
    const characters = [{
      id: '1',
      name: 'Iron Man',
      thumbnail: {
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg/450px-Poster-sized_portrait_of_Barack_Obama.jpg',
        extension: 'jpg',
      },
    }];
    const tree = renderer
      .create(<DisplayCharactersPresentational {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
