import React from 'react';
import { shallow } from 'enzyme';
import Body from '.';

function setup() {
  const props = {
    getIndexInfoEvent: id => id,
    body: {
      content: 'test',
    },
  };

  const enzymeWrapper = shallow(<Body {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Body component', () => {
  it('test Body', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.find(Body).contains('test');
  });
});
