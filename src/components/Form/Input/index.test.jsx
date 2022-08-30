import React from 'react';
import Input from "./index";
import {render, screen} from '@testing-library/react'

test('should have a "Label" element', () => {
    render(<Input/>)
    
    expect(screen.queryByTestId('lasGHDGSHDnn')).toBeDefined();

  });

it('should have a "Input" component', () => {
    render(<Input/>)
    
    expect(screen.queryByTestId('indHDHSkkfc')).toBeDefined(); 
})

it('should have a "Placeholder" attibute', () => {
    render(<Input/>)
    
    expect(screen.queryByPlaceholderText('Digite seu e-mail aqui...')).toBeDefined(); 
})

it('should have a "label" element', () => {
    render(<Input/>)
    
   
    expect(screen.queryByLabelText('Senha')).toBeDefined(); 
})


export {};