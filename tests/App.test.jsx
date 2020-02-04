import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App userId={2} />);

  it('renders Header and Chats', () => {
    expect(wrapper.debug()).toMatch('<Header');
    expect(wrapper.debug()).toMatch('<Chats');
  });
});
