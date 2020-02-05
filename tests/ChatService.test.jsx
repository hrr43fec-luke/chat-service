import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import ChatService from '../client/ChatService';

configure({ adapter: new Adapter() });

describe('<ChatService />', () => {
  const wrapper = shallow(<ChatService userId={2} />);

  it('renders Header and Chats', () => {
    expect(wrapper.debug()).toMatch('<Header');
    expect(wrapper.debug()).toMatch('<Chats');
  });
});
