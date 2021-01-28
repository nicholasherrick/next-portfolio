import Meta from './Meta';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
