import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import "./New.scss"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useState } from 'react';


const New = ({ inputs, title }) => {

  const [file, setFile] = useState('')


  return (
    <div className="neww">
      <SideBar />

      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "/user.png"} alt="pic" />
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label htmlFor="imgg">
                  <CloudUploadIcon />
                </label>
                <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} id="imgg" style={{ display: "none" }} />
              </div>


              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New