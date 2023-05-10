import './SideBar.scss'
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SecurityIcon from '@material-ui/icons/Security';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react";
import { type } from '@testing-library/user-event/dist/type';

const SideBar = () => {

    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className="logo" >Ammar</span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>DashBoard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <GroupIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: "none" }} >
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <TrendingUpIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifcations</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <FavoriteBorderIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <SecurityIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">PROFILE</p>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logouts</span>
                    </li>
                </ul>
            </div>

            <div className='bottom'>
                <div className="colorOptions" onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className="colorOptions" onClick={() => dispatch({type:"DARK"})}></div>
        </div>
        </div >
    )
}

export default SideBar