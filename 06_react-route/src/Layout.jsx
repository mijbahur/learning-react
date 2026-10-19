import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet /> {/* in this section everything will change */}
            <Footer />
        </>
    );
};

export default Layout;