import React from 'react'
import { TareaContextProvider } from '../../../data/TareaContext'
import { TareasPage } from './tareasPage'

export const TareaLayouy = () => {
  return (
    <div>
        <TareaContextProvider>
            <TareasPage/>
        </TareaContextProvider>
    </div>
  )
}
