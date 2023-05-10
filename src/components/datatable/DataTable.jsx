import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesoucre";
import { Link } from "react-router-dom"




const DataTable = () => {

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: "200",
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }} >
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            }
        }
    ]

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to='/users/new' style={{ textDecoration: "none" }} className="link" >
                    Add User
                </Link>
            </div>

            <DataGrid
                className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={[5]}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}

export default DataTable