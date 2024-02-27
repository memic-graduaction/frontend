import ReactDOM from 'react-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalPortal = ({ children }: any) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};
