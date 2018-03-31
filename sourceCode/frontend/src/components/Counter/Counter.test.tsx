import * as React from 'react';
import { mount } from 'enzyme';
import Counter from './Counter';

it('start with a total count of 0', () => {
  const counter = mount(<Counter />);
  const totalCount = counter.find('.counter span');

  expect(totalCount.text()).toBe('0');
});

it('adds 1 to total count when button is pressed', () => {
  const counter = mount(<Counter />);
  const totalCount = counter.find('.counter span');
  const addButton = counter.find('.counter button');

  addButton.simulate('click');
  
  expect(totalCount.text()).toBe('1');
});
