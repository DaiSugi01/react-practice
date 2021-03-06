import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    // Run after it rendered and when after it's destroyed.
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log(`[Cockpit.js] cleanup work in useFeefct.`);
    }
  }, []);

  useEffect (() => {
    // Run everytime user do something.
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log(`[Cockpit.js] cleanup work in 2nd useFeefct.`);
    }
  })

  const assignedlasses = []
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedlasses.push(classes.red)
  }

  if (props.personsLength <= 1) {
    assignedlasses.push(classes.bold)
  }
  
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedlasses.join(' ')}> This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(cockpit);