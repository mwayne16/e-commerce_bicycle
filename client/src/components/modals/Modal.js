import ReactDOM from 'react-dom';
function Modal(props) {
  props.location.dataset.toggled = props.toggled;
  return props.toggled && ReactDOM.createPortal(props.children, props.location);
}
export default Modal;
