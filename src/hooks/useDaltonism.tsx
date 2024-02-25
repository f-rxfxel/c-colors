"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type DaltonismTypes = "None" | "Protanopia" | "Deuteranopia" | "Tritanopia" | "Protanomaly" | "Deuteranomaly" | "Tritanomaly"

interface Daltonism {
  daltonism: DaltonismTypes
  setDaltonism: Dispatch<SetStateAction<DaltonismTypes>>
  SelectDaltonism: ReactNode
}

const DaltonismContext = createContext<Daltonism>({
  daltonism: "None",
  setDaltonism: () => {},
  SelectDaltonism: <></>,
})

const DaltonismProvider = ({ children }: { children: ReactNode }) => {
  const [daltonism, setDaltonism] = useState<DaltonismTypes>("None")
  const SelectDaltonism = (
  <select>
        <option value="None">None</option>
        <option value="Protanopia">Protanopia</option>
        <option value="Deuteranopia">Deuteranopia</option>
        <option value="Tritanopia">Tritanopia</option>
        <option value="Protanomaly">Protanomaly</option>
        <option value="Deuteranomaly">Deuteranomaly</option>
        <option value="Tritanomaly">Tritanomaly</option>
    </select>
  )
  return (
     <DaltonismContext.Provider value={{ daltonism, setDaltonism, SelectDaltonism }}>
        {children}
     </DaltonismContext.Provider>
  )
} 

const useDaltonism = () => useContext(DaltonismContext)

export { useDaltonism, DaltonismProvider }