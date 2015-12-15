import React from 'react';
import ReactDom from 'react-dom';

import Application from '../../src/application';

let root = {}

describe('components rendering',  () => {

    const before = () => {
        root._rootElement = document.createElement("div");
        document.body.appendChild(root._rootElement);
    }

    beforeEach(before);

    it('should render application',  () => {
        ReactDom.render(<Application />, root._rootElement);
        assert.equal(document.querySelector('header').innerHTML, 'Navigation Component');
    }); 
});