
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer'; 

it('renders without crashinng', ()=>{
  const div=document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it("matches snapshot", ()=>{
  const tree = renderer.create(<App/>).toJSON(); 
  expect(tree).toMatchSnapshot();
})