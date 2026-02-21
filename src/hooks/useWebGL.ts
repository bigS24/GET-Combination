import { useEffect, useState } from 'react';

export const useWebGL = (): boolean => {
  const [hasWebGL, setHasWebGL] = useState(true);
  
  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setHasWebGL(!!gl);
      } catch {
        setHasWebGL(false);
      }
    };
    
    checkWebGL();
  }, []);
  
  return hasWebGL;
};

export default useWebGL;
