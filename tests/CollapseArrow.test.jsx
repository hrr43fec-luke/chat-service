import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import CollapseArrow from '../client/CollapseArrow';

configure({ adapter: new Adapter() });

describe('<CollapseArrow />', () => {
  const wrapper = shallow(<CollapseArrow />);

  it('has an SVG', () => {
    expect(wrapper.debug()).toMatch('<path');
  });

  it('handles mouseenters and leaves', () => {
    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate('mouseenter');
    expect(wrapper.state('hover')).toBe(true);
    wrapper.simulate('mouseleave');
    expect(wrapper.state('hover')).toBe(false);
  });
});
