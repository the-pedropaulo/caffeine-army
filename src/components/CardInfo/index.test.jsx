import React from 'react';
import CardInfo from "./index";
import {render, screen} from '@testing-library/react'

it('should have a "sc-AxirZ" classname text', () => {
    const {container} = render(<CardInfo/>)

    const classname = container.querySelector('.sc-AxirZ')
    
    expect(classname).toBeInTheDocument()
})

it('should have a "Title" component', () => {
    render(<CardInfo/>)
    
    expect(screen.queryByTestId('tDHdjhgsa')).toBeDefined(); 
})


export {};