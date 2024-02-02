/* eslint-disable react/prop-types */
import Data from '../../data/data.json'
import {createContext, useState, useEffect} from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const appDataContext = createContext({
  gardeningData: {},
  landscapingData: {},
  fieldManagementData: {},
  socialProofData: {}
})

export const AppDataProvider = (({children}) => {
  const [gardeningData, setGardeningData] = useState({});
  const [landscapingData, setLandscapingData] = useState({});
  const [fieldManagementData, setFieldManagementData] = useState({});

  useEffect(() => {
    const data = Data;
    setGardeningData(data.gardening);
    setLandscapingData(data.landscaping);
    setFieldManagementData(data.fieldManagement);
  }, []);

  const value = {
    gardeningData,
    landscapingData,
    fieldManagementData,
  };

  return(
    <appDataContext.Provider value={value} >
      {children}
    </appDataContext.Provider>
  )
})
