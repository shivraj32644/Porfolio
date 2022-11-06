import React, { useRef } from 'react'
import { createContext } from 'react'


export const RefContext = createContext();
export const RefContextProvider = ({children}) => {
  const aboutRef = useRef(null);
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const githubRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);


  const valueObj = {
    aboutRef,
    introRef,
    projectRef,
    githubRef,
    skillRef,
    contactRef
  }
  return (
      <RefContext.Provider value={valueObj}>{children }</RefContext.Provider>
  )
}
