import "./Featured.scss"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
                </div>
                <p className="title">Total sales</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transactions processing.Last payments may noy be included</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">LastWeek</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last month</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured