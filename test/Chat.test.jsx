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
    message: 'foo message foo foo bar baz',
    messageTimestamp: 333.3,
  };
  it('Testing if expected class names exist when Chat is rendered.', () => {
    const wrapper = shallow(<Chat chat={chat} />);
    expect(wrapper.find('.chatWrapper').exists()).toBe(true);
    expect(wrapper.find('.chat').exists()).toBe(true);
    expect(wrapper.find('.chatTime').exists()).toBe(true);
    expect(wrapper.find('.chatBadge').exists()).toBe(true);
    expect(wrapper.find('.chatUserName').exists()).toBe(true);
  });
});
