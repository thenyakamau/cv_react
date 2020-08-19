import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import FreeLancingDialog from "./FreeLancingDialog";
import { HireContext } from "../../context/HireState";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";

export default function HireInitialPage(props) {
  const { nextPage, selectedLanceJob } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const { getTransactionCost, loading } = useContext(HireContext);

  useEffect(() => {
    getTransactionCost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onDialogChange(values) {
    formControl();
    selectedLanceJob(values);
  }

  function formControl() {
    if (openDialog === true) {
      setOpenDialog(false);
    } else {
      setOpenDialog(true);
    }
  }
  return (
    <div className="hire_layout">
      <SimpleBackdrop open={loading} />
      <div className="hire_details">
        <div className="hire_details_image">
          <img src="assets/icons/hire_lancer.webp" alt="" />
        </div>
        <div className="hire_body">
          <center>
            <h4>Free Lancing Job</h4>
          </center>
          <p>
            Need to build a site for your business and dont know how to or need
            to automate solution to reach out to your customer click the button
            below and book yourself a website price ranges depending on type of
            website and industry the website will be serving. Time constraints
            also contribute to the price.
          </p>

          <div className="hire_details_buttons">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={formControl}
            >
              Book Me
            </Button>
            <Button
              className="hire_details_button"
              variant="outlined"
              size="large"
            >
              Details
            </Button>
          </div>
        </div>
      </div>

      <div className="hire_details">
        <div className="hire_body">
          <center>
            <h4>Job Hiring</h4>
          </center>
          <p>
            Considering hiring me for a full time job then click the button
            below you can also check the fields that i have experience in by
            clicking the other button. i have an average of one year experience
            as of now in the working environment i would be glad to be part of
            your company given the chance.
          </p>

          <div className="hire_details_buttons">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={(e) => nextPage(1)}
            >
              Hire Me
            </Button>

            <Button
              className="hire_details_button"
              variant="outlined"
              size="large"
            >
              Details
            </Button>
          </div>
        </div>
        <div className="hire_details_image">
          <img src="assets/icons/hire_job.webp" alt="" />
        </div>
      </div>

      <FreeLancingDialog
        openDialog={openDialog}
        formControl={formControl}
        onDialogChange={onDialogChange}
      />
    </div>
  );
}
