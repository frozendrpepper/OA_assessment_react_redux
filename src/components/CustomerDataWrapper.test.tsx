import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerDataWrapper from './CustomerDataWrapper';

describe('CustomerDataWrapper tests', () => {
    it('Table header should display', () => {
        render(<CustomerDataWrapper />);
       
        screen.debug(undefined, 30000);
    });
});