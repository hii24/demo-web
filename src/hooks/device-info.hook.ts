import {useState, useLayoutEffect} from 'react';

const checkIsMobile = () => {
  if (
    navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/Android/i)
  ) {
    return true
  } else {
    return false
  }
}

export default function useDeviceInfo() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMobile(checkIsMobile());
  }, []);

  return {isMobile};
}
