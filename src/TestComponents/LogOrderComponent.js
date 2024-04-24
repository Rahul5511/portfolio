import React, { useEffect, useState } from 'react';

const LogOrderComponent = (NewComponent) => {
   const LoggingInfo = (props) => {
      const [value, setValue] = useState(null); // Initialize state with null

      useEffect(() => {
         console.log("user Logged in successfully");
         setValue("logged in"); // Set the value when user logs in
         
         return () => {
            console.log("user logged out successfully");
            setValue("logged out"); // Set the value when user logs out
         };
      }, []);

      return <NewComponent {...props} loggingValue={value} />;
   };

   return LoggingInfo;
};

export default LogOrderComponent;
