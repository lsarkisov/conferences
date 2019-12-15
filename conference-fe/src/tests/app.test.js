import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('matches snapshot', () => {
    const app = mount(<App />);
    expect(app.find('.wrap').length).toBe(1);
  });

  it('matches snapshot', () => {
    const app = mount(<App />);
    expect(app.find('.wrap').children().length).toBe(2);
  });
});
