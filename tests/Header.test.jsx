import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../client/Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('renders Header and Chats', () => {
    expect(wrapper.debug()).toMatch('Chat on Videos');
  });
});
