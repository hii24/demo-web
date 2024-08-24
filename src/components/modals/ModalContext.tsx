import React, { createContext, useContext, useState, useCallback } from 'react';


const ModalContext = createContext({});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [modals, setModals] = useState<any>([]);

  const openModal = useCallback((Component: React.ReactNode, props: any) => {
    setModals((modals: any) => [...modals, {Component, props}]);
  }, []);

  const closeModal = useCallback(() => {
    setModals((modals: any) => modals.slice(0, -1));
  }, []);

  return (
    <ModalContext.Provider value={{openModal, closeModal}}>
      {children}
      {modals.map((modal: any, index: number) => {
        const {Component, props} = modal;
        return <Component key={index} {...props} closeModal={closeModal}/>;
      })}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext<any>(ModalContext);
