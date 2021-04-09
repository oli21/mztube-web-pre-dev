import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import CourseCard from '../CourseCard';
import CourseList from '../CourseList';

it('renders course card without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CourseCard />, div);
})

it('renders course card correctly', () => {
    const rating = 4.6;
    const price = "$200";
    const numOfDownloads = "350,990";
    const title = "2021 Complete Python Bootcamp From Zero to Hero in Python";
    const author = "John Doe";
    const isBestSeller = true;
    const img = "https://res.cloudinary.com/dv244dkbr/image/upload/v1615409755/Mztube/1_xi2cov.jpg";

    const { getByTestId } = render(<CourseCard rating={rating}
        price={price}
        numOfDownloads={numOfDownloads}
        title={title}
        author={author}
        isBestSeller={isBestSeller}
        img={img} />)

    expect(getByTestId('course-card-title')).toHaveTextContent(title);
    expect(getByTestId('course-card-author')).toHaveTextContent(author);
    expect(getByTestId('course-card-rating')).toHaveTextContent(rating);
    expect(getByTestId('course-card-downloads')).toHaveTextContent(numOfDownloads);
    expect(getByTestId('course-card-price')).toHaveTextContent("$" + price);

})

it('renders course list without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CourseList />, div);
})