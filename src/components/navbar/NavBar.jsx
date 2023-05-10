import './NavBar.scss'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ListIcon from '@material-ui/icons/List';

const NavBar = () => {
    return (
        <div className='navbar'>

            <div className='wrapper'>
                <div className="search">
                    <input type="text" placeholder='search' />
                    <SearchIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <NightsStayIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListIcon className="icon" />
                    </div>

                    <div className="item">
                        <img src="/avatar.png" alt="avatar" className='avatar' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar