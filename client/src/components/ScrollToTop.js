import React, { useEffect } from 'react';
function ScrollToTop(props) {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        anchor.scrollIntoView({
          behavior: 'smooth',
        });
        return anchor.removeEventListener('click', e);
      });
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  return props.children;
}
export default React.memo(ScrollToTop, (prevProps, nextProps) => {
  return nextProps.location.pathname === prevProps.location.pathname;
});
