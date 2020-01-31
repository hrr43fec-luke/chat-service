import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import TimeStamp from '../client/TimeStamp';

configure({ adapter: new Adapter() });

describe('<TimeStamp />', () => {
  const wrapper = shallow(<TimeStamp timeStamp={222.2} />);

  it('has expected data exists when timeStamp is rendered.', () => {
    expect(wrapper.debug()).toMatch('3:42'); // 222.2 seconds converted to min:sec
  });

  it('handles mouseenters and leaves', () => {
    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate('mouseenter');
    expect(wrapper.state('hover')).toBe(true);
    wrapper.simulate('mouseleave');
    expect(wrapper.state('hover')).toBe(false);
  });
});
