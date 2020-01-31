import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ToolTip from '../client/ToolTip';

configure({ adapter: new Adapter() });

describe('<ToolTip />', () => {
  const text = 'Tippy Text';

  const wrapper = shallow(<ToolTip text={text} hidden={false} />);

  it('has expected data exists when ToolTip is rendered.', () => {
    expect(wrapper.debug()).toMatch(text);
    const tree = renderer.create(<ToolTip
      text={text}
      hidden={false}
    />).toJSON();
    expect(tree.props.hidden).toBe(false);
  });
});
