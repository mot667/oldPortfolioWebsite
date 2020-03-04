import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import './App.css';
import { useDencrypt } from "use-dencrypt-effect";
import ScrollNavigation from 'react-single-page-navigation';
import ContactMe from './ContactMe';
import { Parallax, Background } from 'react-parallax';



const values = ["Not Your", "Average", "Software", "Engineer"];





const Line1 = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    

    const action = setInterval(() => {
      dencrypt(values[0]);

    }, 0);

    return () => clearInterval(action);
  }, []);

  return <div style={{fontSize: 80}}>{result}</div>;
};

const Line2 = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    

    const action = setInterval(() => {
      dencrypt(values[1]);

    }, 1000);

    return () => clearInterval(action);
  }, []);

  return <div style={{fontSize: 80}}>{result}</div>;
};

const Line3 = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    

    const action = setInterval(() => {
      dencrypt(values[2]);

    }, 2000);

    return () => clearInterval(action);
  }, []);

  return <div style={{fontSize: 80}}>{result}</div>;
};

const Line4 = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    

    const action = setInterval(() => {
      dencrypt(values[3]);

    }, 3000);

    return () => clearInterval(action);
  }, []);

  return <div style={{fontSize: 80}}>{result}</div>;
};





function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
  <div>

  <body>
    <div className = "sectionStyle">
      <div className = "centerDiv">
      <Line1/>
      <Line2/>
      <Line3/>
      <Line4/>
      </div>
      
 
      
      
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className = "menu" ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>

        
      </>
     
    </ThemeProvider>
    </div>
   
    </body>
  

  <div className = "ContactMe">
     <ContactMe/>
     </div>
  
     </div>
  
  
  );
}



export default App;
