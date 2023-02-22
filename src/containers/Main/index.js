import React from 'react'

import './style.css'

const AppMain = (props) => {

  return (
    <main className="App-main" id="main">{props.children}</main>
  );
}

export default AppMain
