import React from 'react';
import { mount } from 'enzyme';
import RecipeContainer from './RecipeContainer';

describe('RecipeContainer', () => {
    test('Should be RecipeContainer', () => {
        const wrapper = mount(<RecipeContainer searchString="" />);
        expect(wrapper.is('RecipeContainer')).toBeTruthy();
    })

    // Add more tests here
})
