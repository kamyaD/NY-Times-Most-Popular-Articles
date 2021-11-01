import React from 'react';
import ReactDom from 'react-dom';
import Results from '../Results';

import { render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer'; 

it("renders without crashing",()=>{
     const div= document.createElement("div");
     ReactDom.render(<Results/>, div)
})

it("renders Results correctly", ()=>{
  const {getByTestId}=render(<Results/>) 
  expect(getByTestId('content')).toHaveTextContent("Data is loading...")
})

it("matches snapshot", ()=>{
   const tree = renderer.create(<Results/>).toJSON(); 
   expect(tree).toMatchSnapshot();
})
