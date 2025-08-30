import React from 'react';

export const ContextAuth = React.createContext({
  auth: true,
  setAuth: jest.fn()
});