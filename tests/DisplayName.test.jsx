import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import DisplayName from '../client/DisplayName';

configure({ adapter: new Adapter() });

describe('<DisplayName />', () => {
  const displayName = 'Testem Good';
  const displayNameColor = '#123456';

  const wrapper = shallow(<DisplayName
    displayName={displayName}
    displayNameColor={displayNameColor}
  />);

  it('has expected data exists when DisplayName is rendered.', () => {
    expect(wrapper.debug()).toMatch(displayName);
  });

  it('handles mouseenters and leaves', () => {
    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate('mouseenter');
    expect(wrapper.state('hover')).toBe(true);
    wrapper.simulate('mouseleave');
    expect(wrapper.state('hover')).toBe(false);
  });

  const tree = renderer.create(<DisplayName
    displayName={displayName}
    displayNameColor={displayNameColor}
  />).toJSON();
  expect(tree.props.color).toBe(displayNameColor);
});
