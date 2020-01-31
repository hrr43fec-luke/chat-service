import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Chat from '../client/Chat';

configure({ adapter: new Adapter() });

describe('<Chat />', () => {
  const chat = {
    displayName: 'foouserName',
    displayNameColor: '#800000',
    badge: '',
    badgeText: 'badge msg',
    message: 'foo message foo foo bar baz',
    timeStamp: 333.3,
  };

  const wrapper = shallow(<Chat chat={chat} />);

  it('has expected data exists when Chat is rendered.', () => {
    expect(wrapper.debug()).toMatch(chat.displayName);
    expect(wrapper.debug()).toMatch(chat.message);
    expect(wrapper.debug()).toMatch(chat.timeStamp.toString());
  });

});
