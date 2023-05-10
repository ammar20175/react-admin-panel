import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Widget.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
const Widget = ({ type }) => {
    const amount = 100;
    const diff = 20;

    //temp data
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineIcon className='icon' style={{
                        color: "#0d0a0b",
                        backgroundColor: "rgb(193 134 134)"
                    }
                    } />
                )
            };
            break;
        case "order":
            data = {
                title: "ORDERS  ",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartIcon className='icon' style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218,165,32,0.2)"
                    }} />
                )
            };
            break;

        case "earning":
            data = {
                title: "REVENUE  ",
                isMoney: true,
                link: "View net revenue",
                icon: (
                    <MonetizationOnIcon className='icon' style={{
                        color: "green",
                        backgroundColor: "rgba(0,128,0,0.2)"
                    }} />
                )
            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "see details",
                icon: (
                    <AccountBalanceIcon className='icon' style={{
                        color: "purple",
                        backgroundColor: "rgba(128,0,128,0.2)"
                    }} />
                )
            };
            break;
        default:
            break;
    }


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}
                </div>
                {data.icon}
            </div>

        </div>
    )
}

export default Widget