import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Card from '../client/components/Card';
import Column from '../client/components/Column';
import Board from '../client/components/Board';

configure({ adapter: new Adapter() });


describe('<Card />', () => {
  const defaultProps = {
    title: 'Card1'
  }
  it('renders the title and all text', () => {
    const CardComponent = shallow(<Card {...defaultProps} />);
    //check for all text
    expect(CardComponent.text()).toEqual(`${defaultProps.title}StoryTo-DoIn-ProgressTo-VerifyCompletedMove`);
  });

  it('has a move button, className move-button', () => {
    const CardComponent = shallow(<Card {...defaultProps} />).find('button');
    // check for one button with class
    expect(CardComponent.hasClass('move-button')).toEqual(true);
    expect(CardComponent).toHaveLength(1);
  });

  it('has a selector called "column"', () => {
    const CardComponent = shallow(<Card {...defaultProps} />).find('select');
    // check for one button with class
    expect(CardComponent.hasClass('card-component-dropdown')).toEqual(true)
    expect(CardComponent.prop('name')).toEqual('column')
  });

  it('5 select options', () => {
    const CardComponent = shallow(<Card {...defaultProps} />).find('option');
    expect(CardComponent).toHaveLength(5);
  });

  it('check snapshot', () => {
    const CardComponent = shallow(<Card {...defaultProps} />);
    expect(toJson(CardComponent)).toMatchSnapshot();
  });
});


describe('<Column />', () => {
  const defaultProps = {
    column: [
      { title: "Scrum Board Card", column: "Story" },
      { title: "styling with css", column: "Story" }
    ],
    header: 'Story'
  }
  it('renders the column title', () => {
    const ColumnComponent = shallow(<Column {...defaultProps} />).find('h1');
    expect(ColumnComponent.text()).toEqual('Story');
  });
  it('renders multiple cards', () => {
    const ColumnComponent = shallow(<Column {...defaultProps} />).find('Card');
    expect(ColumnComponent).toHaveLength(2);
  });
  it('check snapshot', () => {
    const CardComponent = shallow(<Card {...defaultProps} />);
    expect(toJson(CardComponent)).toMatchSnapshot();
  });
});


describe('<Board />', () => {
  const defaultProps = {
    title: "Scrum Board",
    board: "Scrum Board"
  }
  it('renders in a div called board-component', () => {
    const BoardComponent = shallow(<Board {...defaultProps} />).find('div');
    expect(BoardComponent.hasClass('board-component')).toBe(true);
  });

  it('renders a link component', () => {
    const BoardComponent = shallow(<Board {...defaultProps} />).find('Link');
    expect(BoardComponent.hasClass('board-component-link')).toBe(true);
    expect(BoardComponent.prop('to')).toEqual('/board/Scrum Board');
    expect(BoardComponent.prop('activeclassname')).toEqual('current');
    expect(BoardComponent.text()).toEqual('Scrum Board');

  })

  it('check snapshot', () => {
    const BoardComponent = shallow(<Board {...defaultProps} />);
    expect(toJson(BoardComponent)).toMatchSnapshot();
  });
});
