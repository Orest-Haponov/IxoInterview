import  React from 'react';
import { ValueContext } from '../PageRoutes';
 
const PageOne = () => {
  const [value, setValue] = React.useContext(ValueContext);

  return (
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
  );
}
 
export default PageOne;