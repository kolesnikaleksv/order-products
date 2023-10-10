import { render, screen } from '@testing-library/react'
import Product from '../components/Product/Product';
import '@testing-library/jest-dom/extend-expect';

test("Example 1 renders successfully", () => {
    render(<Product />);

    const element = screen.getByText(/Type of products:/i);

    expect(element).toBeInTheDocument();
})