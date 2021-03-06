import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import Chats from '../client/Chats';

configure({ adapter: new Adapter() });

const didMount = async (ComponentClass, props) => {
  const lifecycleMethod = spy(ComponentClass.prototype, 'componentDidMount');

  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<ComponentClass {...props} />);

  await lifecycleMethod.returnValues[0];
  lifecycleMethod.restore();
  return wrapper.update();
};

describe('<Chats />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the correct number of children',
    async () => {
      const chats = [
        {
          _id: '5e2f1c5f8015f54a8c4738e4',
          userName: 'Aylin78',
          displayName: 'Berta11',
          displayNameColor: '#361a61',
          badge: 'https://s3.amazonaws.com/uifaces/faces/twitter/jasonmarkjones/128.jpg',
          badgeText: 'one two',
          message: 'Ut neque aut amet sit dolores.',
          videoId: 2,
          timeStamp: 2.335516125113517,
          __v: 0,
        }, {
          _id: '5e2f1c5f8015f54a8c4738ed',
          userName: 'Brenda_Pagac',
          displayName: 'Nils.Roberts',
          displayNameColor: '#496f69',
          badge: 'https://s3.amazonaws.com/uifaces/faces/twitter/shaneIxD/128.jpg',
          badgeText: 'three four',
          message: 'Deserunt aliquid neque in sunt.',
          videoId: 2,
          timeStamp: 4.77704142731511,
          __v: 0,
        }, {
          _id: '5e2f1c5f8015f54a8c4738f4',
          userName: 'Kelly.McLaughlin98',
          displayName: 'Alize_Goodwin',
          displayNameColor: '#3f1527',
          badge: 'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg',
          badgeText: 'five six',
          message: 'Officia tempore modi nobis commodi.',
          videoId: 2,
          timeStamp: 7.797098444685422,
          __v: 0,
        },
      ];

      fetch.mockResponseOnce(JSON.stringify(chats));

      const wrapper = await didMount(Chats, { userId: 2 });

      expect(wrapper.children().length).toBe(3);
    });

  // it('calls console.error on errors',
  //   async () => {
  //     const errMsg = 'fake error from test suite';
  //     let receivedErrMsg;
  //     const spyConsoleError = jest.spyOn(global.console, 'error')
  //       .mockImplementation((err) => { receivedErrMsg = err; });

  //     fetch.mockReject(errMsg);

  //     await didMount(Chats);

  //     expect(spyConsoleError).toHaveBeenCalled();
  //     expect(errMsg).toBe(receivedErrMsg.toString());

  //     spyConsoleError.mockRestore();
  //   });
});
