import React from 'react';
import { shallow } from 'enzyme';
import Template from '.';

const testElement = () => (
  <div />
);

function setup() {
  const props = {
    children: testElement,
  };

  const enzymeWrapper = shallow(<Template {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('index componet', () => {
  it('show', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div.col-md-4'))
      .toexists;
  });
});
