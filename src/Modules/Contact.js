import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import "../Styles/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = (props) => {
  const [state, setState] = useState(props?.initialData);
  useEffect(() => {
    setTimeout(() => {
      let setFocus = document.getElementById("Name");
      setFocus?.focus();
    }, 50);
    // setState(props?.initialData); // For setting the value of all fields to be blank when we open modal
  }, [props?.open]);

  const handleChange = (e) => {
    setState((prev) => {
      prev[e.target.id] = e.target.value;
      return { ...prev };
    });
  };
  const handleSave = () => {
    debugger;
    isValid && props?.handleClose();
  };
  const { handleSubmit, errors, isValid } = useFormik({
    initialValues: state,
    enableReinitialize: true,
    validationSchema: Yup.object({
      Name: Yup.string().required("Name is required"),
      Email: Yup.string().email("Email is invalid").required(),
    }),
    onSubmit: handleSave,
  });
  return (
    <Fragment>
      <Dialog
        id="dialog"
        open={props?.open}
        onClose={props?.handleClose}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontFamily: "serif",
            fontSize: "25px",
            fontStyle: "oblique",
            fontWeight: "bold",
          }}
        >
          {"GET IN TOUCH"}
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className="main-container"
              direction="column"
            >
              <Typography className="typography">Your Name </Typography>
              <TextField
                id="Name"
                size="small"
                // autoFocus={true}
                required={true}
                onChange={handleChange}
                value={state?.data?.["Name"]}
                variant="outlined"
                autoComplete="off"
                sx={{
                  width: 350,
                  maxWidth: "100%",
                }}
                fullWidth
                error={Boolean(errors.Name)}
                helperText={errors.Name}
              />
              <Typography className="typography">Your Email </Typography>
              <TextField
                id="Email"
                required={true}
                sx={{
                  width: 350,
                  maxWidth: "100%",
                }}
                fullWidth
                size="small"
                onChange={handleChange}
                value={state?.data?.["Email"]}
                variant="outlined"
                autoComplete="off"
                error={Boolean(errors.Email)}
                helperText={errors.Email}
              />
              <Typography className="typography">Your Message </Typography>
              <TextField
                id="message"
                sx={{
                  width: 350,
                  maxWidth: "100%",
                }}
                fullWidth
                onChange={handleChange}
                value={state?.data?.["message"]}
                multiline
                rows={3}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={3}>
            <Grid
              item
              className="buttons"
              xs={12}
              sm={12}
              md={12}
              columnGap={2}
            >
              <Button size="medium" variant="contained" onClick={handleSubmit}>
                SEND
              </Button>
              <Button
                size="medium"
                variant="contained"
                onClick={props?.handleClose}
              >
                CANCEL
              </Button>
              {/* <Button variant="none">
                <WhatsAppIcon fontSize="small" />
                <Typography id="number-typo">8795988520</Typography>
              </Button> */}
            </Grid>
            <Grid container className="helper">
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                className="buttons1"
                // columnGap={1}
              >
                <Grid item md={1}>
                  <IconButton
                    href="https://www.linkedin.com/in/ankur-sharma-896bab1a0/"
                    target="_blank"
                    rel="noopener noreferrer" // This prevents security risks with target="_blank"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item md={1}>
                  <IconButton
                    component="a"
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
                    target="_blank"
                    rel="noopener noreferrer" // This prevents security risks with target="_blank"
                  >
                    <GoogleIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item md={1.8} className="whatsapp">
                  <WhatsAppIcon fontSize="large" />
                  <span id="number-typo">8795988520</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default React.memo(Contact);
