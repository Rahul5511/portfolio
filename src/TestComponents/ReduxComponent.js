import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { testAction } from '../redux/action';
import ReduxContainer from './ReduxContainer';

const ReduxComponent = () => {

  const {testUser} = ReduxContainer();

    const obj = {
        name:"rahul",
        company:"skadhjd"
    }

    const dispatch = useDispatch();
    const testData = useSelector(state => console.log(state.testData))

    useEffect(() => {
      dispatch(testAction(obj))
    },[dispatch])

    

  return (
    <div>
       <h3>ReduxComponent</h3>
    </div>
  )
}

export default ReduxComponent
