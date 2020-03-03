import React, { useState, useEffect } from 'react';

const Rainbow = WrappedComponent => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const selectedColor = {
    color: randomColor
  };
  return props => (
    <div className="wrappedcomp">
      <WrappedComponent color={selectedColor} {...props}>
        {' '}
        {props.children}{' '}
      </WrappedComponent>
    </div>
  );
};
export default Rainbow;
// const withCurrentUser = Component => {
//   const NewComponent = props => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {

//       return () => {};
//     }, []);
//     return <Component {...props} />;
//   };
//   return NewComponent;
// };

// export default withCurrentUser;
