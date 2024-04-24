import React from 'react';
import { useSelector } from 'react-redux';

const ReduxContainer = () => {
    const testUser = useSelector(state => state.testData);
    
    return testUser; 
}

export default ReduxContainer;
