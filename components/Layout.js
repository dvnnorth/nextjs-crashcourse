import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <link href='https://bootswatch.com/4/darkly/bootstrap.min.css' rel='stylesheet' />
    <Navbar />
    <main className='container mt-5'>
      {children}
    </main>
  </>
);

export default Layout;