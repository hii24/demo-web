import { useEffect, useState } from 'react';

export const useShowDisclaimerModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const disclaimer = localStorage.getItem('disclaimer');

    if (disclaimer === 'false' || !disclaimer) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [localStorage.getItem('disclaimerKey')]);

  return {showModal, setShowModal};
};
