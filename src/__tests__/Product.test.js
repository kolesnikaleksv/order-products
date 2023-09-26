import { render, screen } from '@testing-library/react'
import Product from '../components/product/Product';
import '@testing-library/jest-dom/extend-expect';

test("Example 1 renders successfully", () => {
    render(<Product />);

    const element = screen.getByText(/Hello product!/i);


    expect(element).toBeInTheDocument();
    // expect(screen.getByText(/first test/i)).toBeInTheDocument();
})