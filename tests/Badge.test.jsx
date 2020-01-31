import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Badge from '../client/Badge';

configure({ adapter: new Adapter() });

describe('<Badge />', () => {
  const badge = 'https://s3.amazonaws.com/uifaces/faces/twitter/markolschesky/128.jpg';
  const badgeText = 'this that';

  const wrapper = shallow(<Badge badge={badge} badgeText={badgeText} />);

  it('has expected data exists when badge is rendered.', () => {
    expect(wrapper.debug()).toMatch(badge);
    expect(wrapper.debug()).toMatch(badgeText);
  });

  it('handles mouseenters and leaves', () => {
    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate('mouseenter');
    expect(wrapper.state('hover')).toBe(true);
    wrapper.simulate('mouseleave');
    expect(wrapper.state('hover')).toBe(false);
  });
});
