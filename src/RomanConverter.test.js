import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import RomanConverter from './RomanConverter';

describe('<RomanConverter />', () => {
    afterEach(cleanup);

    it('has an input field', () => {
        const { getByLabelText } = render(<RomanConverter />);
        expect(getByLabelText(/arabic/i)).toBeInTheDocument();
    });

    it('shows no roman number by default', () => {
        const { getByText } = render(<RomanConverter />);
        expect(getByText('Roman: none')).toBeInTheDocument();
    });

    it('converts 2019 to MMXIX', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), {
            target: { value: '2019' }
        });
        expect(getByText('Roman: MMXIX')).toBeInTheDocument();
    });
});
