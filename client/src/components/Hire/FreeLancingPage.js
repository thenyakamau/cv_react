import React, { useState, useContext } from "react";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomDialog from "../../widgets/MyDialog";
import CustomAlertDialog from "../../widgets/MyAlertDialog";
import { HireContext } from "../../context/HireState";
import LanceDialog from "./LanceDialog";


//! I could have used a class component here and made my life easier but its part of the practice.
export default function FreeLancingPage(props) {
  const { nextPage, lanceJob } = props;
  const { error, loading, responseMessage } = useContext(HireContext);

  console.log(lanceJob);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const dialogValues = { responseMessage, openSuccessDialog, error };

  function closeSuccessDialog() {
    setOpenSuccessDialog(false);
  }

  function formControl() {
    if (openDialog === true) {
      setOpenDialog(false);
    } else {
      setOpenDialog(true);
    }
  }

  function saveJobApplication() {}

  return (
    <div className="hire_job_layout">
      <SimpleBackdrop open={loading} />
      <div className="hire_job_body">
        <div className="hire_job_image">
          <img src="assets/icons/hire_lancer.webp" alt="" />
          <div className="url_link">
            <label className="url_label" onClick={() => nextPage(0)}>
              Go Back
            </label>
          </div>
        </div>
        <div className="hire_job_container">
          <div className="input_container">
            <h2>{lanceJob.type} app</h2>
            <br />
            <CustomAlertDialog
              error={error}
              responseMessage={responseMessage}
            />
            <div className="login_input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  id="name"
                  placeholder="Name"
                  type="text"
                  className="input @error('name') is-invalid @enderror"
                  name="name"
                  required
                  autocomplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autofocus
                />
              </div>
            </div>

            <div className="login_input-div one">
              <div className="i">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="div">
                <input
                  id="email"
                  placeholder="Email"
                  type="email"
                  className="input @error('email') is-invalid @enderror"
                  name="email"
                  required
                  autocomplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autofocus
                />
              </div>
            </div>

            <div className="login_input-div one">
              <div className="i">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="div">
                <input
                  id="number"
                  placeholder="Phone Number"
                  type="text"
                  className="input @error('number') is-invalid @enderror"
                  name="number"
                  required
                  autocomplete="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  autofocus
                />
              </div>
            </div>

            <div class="login_input-div one">
              <div class="i">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="div">
                <input
                  placeholder="Job description"
                  type="text"
                  name="job"
                  required
                  autofocus
                  value={description.description}
                  onChange={formControl}
                  onClick={formControl}
                />
              </div>
            </div>

            <input
              type="submit"
              className="btn_login"
              value="Hire Now"
              onClick={saveJobApplication}
            />
          </div>
        </div>
      </div>
      <CustomDialog values={dialogValues} handleClose={closeSuccessDialog} />
      <LanceDialog openDialog = {openDialog} formControl = {formControl} lanceJob = {lanceJob}/>
    </div>
  );
}
