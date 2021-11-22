// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
 
test('should not show the message on mount', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.hello-message').exists()).toBeFalsy()
}); 
 
test('should show the correct button text on mount', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('.hello-button').first(); 
    expect(button.text()).toEqual('Say Hello');
});
 
test('should change the button text on click', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('.hello-button').first();
    button.simulate('click');
    expect( wrapper.find('.hello-button').first().text()).toEqual('Reset');
});
 
test('should show the message on button click', () => {
    const wrapper = shallow(<App />);
    let button = wrapper.find('.hello-button').first();
    button.simulate('click');
    expect(wrapper.find('.hello-message').exists()).toBeTruthy()}

)
