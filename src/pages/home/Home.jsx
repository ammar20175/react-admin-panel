import Charts from '../../components/charts/Charts'
import Featured from '../../components/featured/Featured'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Widget from '../../components/widget/Widget'
import Table from '../../components/tables/Tables'
import './Home.scss'

const Home = () => {
    return (
        <div className="home Ammar Ahmad">
            <SideBar />
            <div className="homeContainer">
                <NavBar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>

                <div className="charts">
                    <Featured />
                    <Charts />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Lastest Transactions</div>
                </div>
                <Table />
            </div>
        </div>
    )
}

export default Home