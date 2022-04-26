import React from 'react'
import IsMobileProvider from './src/contexts/IsMobileContext';
export const wrapRootElement = ({ element }) => <IsMobileProvider>{element}</IsMobileProvider>;
