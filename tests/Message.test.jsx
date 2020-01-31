import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Message from '../client/Message';

configure({ adapter: new Adapter() });

describe('<Message />', () => {
  const message = 'This is a test message. Had this been an actual message...';

  const wrapper = shallow(<Message message={message} />);

  it('has expected data exists when Message is rendered.', () => {
    expect(wrapper.debug()).toMatch(message);
  });
});
