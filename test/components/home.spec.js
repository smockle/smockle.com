import React from 'react';
import Home from '../../app/components/home';
import TestUtils from 'react-addons-test-utils';

describe('Components', () => {
  describe('Home', () => {
    let component;
    beforeEach(() => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<Home />);
      component = shallowRenderer.getRenderOutput();
    });
    it('should have a div as container', () => {
      assert.strictEqual(component.type, 'div');
    });
    it('should contain children', () => {
      assert.notTypeOf(TestUtils.isElementOfType(component.props.children), 'undefined');
    });
  });
});
