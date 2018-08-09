import React from 'react';
import renderer from 'react-test-renderer';
import Chap2 from '../app/Chap2';
import Chap9 from '../app/Chap9';

// jest.mock('react-native-camera', () => 'camera');

test('renders correctly', () => {
    const tree = renderer.create(<Chap2 />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<Chap9 />).toJSON();
    expect(tree).toMatchSnapshot();
});