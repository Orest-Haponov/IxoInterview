import  React from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';

export const ValueContext = React.createContext<any>(null);


const PageRoutes = () => {
  const [value, setValue] = React.useState<string>('');

  return (
    <>
      <Header />
      <ValueContext.Provider value={[value, setValue]}>
        <Outlet />
      </ValueContext.Provider>
    </>
  );
}
 
export default PageRoutes;