import React, { useRef } from 'react'
import { createContext } from 'react'


export const RefContext = createContext();
export const RefContextProvider = ({children}) => {
  const aboutRef = useRef(null);
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);


  const valueObj = {
    aboutRef,
    introRef,
    projectRef,
    resumeRef,
    skillRef,
    contactRef
  }
  return (
      <RefContext.Provider value={valueObj}>{children }</RefContext.Provider>
  )
}
