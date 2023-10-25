import React from 'react';
import FirstComponent from "./components/first-component/FirstComponent";

const App = () => {
  return (
      <div>
          <FirstComponent txt={'hello'}/>
          <FirstComponent/>
      </div>
  );
};

export {App};
