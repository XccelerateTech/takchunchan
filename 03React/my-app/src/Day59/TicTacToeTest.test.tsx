import * as React from 'react';
import { Board, Square } from './TicTacToeTest';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Board />', () => {
  it('renders a <Board /> components with 9 squares', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Square).length).toEqual(9);
  });

  it('fill X in respond to a click', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance() as Board;
    board.handleClick(0);
    expect(board.state.squares).toEqual(['X', null, null,
                                        null, null, null,
                                        null, null, null]);
  });
});