
import { useParams } from 'react-router-dom';
import SideMenu from "./../components/SideMenu";

const DynamicComponent = () => {
    const { routeName } = useParams();
    return (
        <>
            <h3 className="cus-top-menu">Admin Panel</h3>
            <div style={{ display: 'flex', height: '100%' }}>
                <SideMenu />
                <main>
                    { routeName === undefined ?  
                        <h3 className="cus-title">Welcome to dashboard</h3>
                    :
                        <h3 className="cus-title">You're in {routeName} Component</h3>
                    }
                </main>
            </div>
        </>
    );
}

export default DynamicComponent;