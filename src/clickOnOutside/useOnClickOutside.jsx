import React from 'react';

export default (onClickOutside, disabled) => {
  const ref = React.useRef();

  const checkForClickOutside = e => {
    if (ref.current) {
      if (!ref.current.contains(e.target)) {
        onClickOutside();
      }
    }
  };

  React.useEffect(() => {
    if (!disabled) {
      window.addEventListener('click', checkForClickOutside);
      return () => {
        window.removeEventListener('click', checkForClickOutside);
      };
    }

    window.removeEventListener('click', checkForClickOutside);
  }, [disabled]);

  return ref;
};
