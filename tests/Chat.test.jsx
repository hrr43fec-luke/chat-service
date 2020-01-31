import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Chat from '../client/Chat';

configure({ adapter: new Adapter() });

describe('<Chat />', () => {
  const chat = {
    displayName: 'fooUserName',
    displayNameColor: '#800000',
    chatBadge: '',
    chatBadgeText: 'badge msg',
    message: 'foo message foo foo bar baz',
    messageTimestamp: 333.3,
  };

  const wrapper = shallow(<Chat chat={chat} />);

  it('has expected class names exist when Chat is rendered.', () => {
    expect(wrapper.find('.chatWrapper').exists()).toBe(true);
    expect(wrapper.find('.chat').exists()).toBe(true);
    expect(wrapper.find('.chatTime').exists()).toBe(true);
    expect(wrapper.find('.chatBadge').exists()).toBe(true);
    expect(wrapper.find('.chatUserName').exists()).toBe(true);
    expect(wrapper.find('.chatToolTip').exists()).toBe(true);
  });

  it('has expected data exists when Chat is rendered.', () => {
    expect(wrapper.debug()).toMatch(chat.displayName);
    expect(wrapper.debug()).toMatch(chat.message);
    expect(wrapper.debug()).toMatch('5:33'); // 333.33 seconds
  });

  // I attempted to write some hover tests here. However, I realized
  // that my Chat component uses basic HTML instead of more react
  // components. Trying to test HTML when jest is in 'react' mode
  // doesn't seem possible (in that I can't seem to get it to tell
  // me the equivalent of 'computed style' in chrome dev tools,
  // probably because it's not making a DOM (as that would be
  // jsdom testing mode not react testing mode.)

});
