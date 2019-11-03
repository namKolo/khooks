// @flow
import { useEffect } from 'react';

const useOnClickOutside = (ref, onClickOutside) => {
  const handleClick = e => {
    // Do nothing if clicking ref's element or descendent elements
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }

    if (onClickOutside) {
      onClickOutside(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOnClickOutside;
