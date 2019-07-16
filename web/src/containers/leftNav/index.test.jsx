import { shallow } from 'enzyme'
import React from 'react';

import LeftNav from './index'

function setup() {
    const lefttest = () =>(
        <div >
          <LeftNav />
        </div>
      );
      
    const enzymeWrapper = shallow(<lefttest />);
    return {
        enzymeWrapper,
    };
  }
  
  describe('test leftNav userinfo', () => {
    it('userinfo', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('card-title')).toexists;
      expect(enzymeWrapper.find('card-subtitle'))
        .toexists;
    });
  });