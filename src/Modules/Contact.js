import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import React, { Fragment, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import "../Styles/Contact.css";

const Contact = (props) => {
  const [state, setState] = useState(props?.initialData);
  const formRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      let setFocus = document.getElementById("name");
      setFocus?.focus();
    }, 50);
    // setState(props?.initialData); // For setting the value of all fields to be blank when we open modal
  }, [props?.open]);

  const handleChange = (e) => {
    setState((prev) => {
      prev[e.target.id] = e.target.value;
      return { ...prev };
    });
    const textBoxIds = ["name", "user_email", "message"];

    textBoxIds.forEach((id) => {
      if (document?.getElementById(id)) {
        document.getElementById(id).style.color = "white";
      }
    });
  };
  useEffect(() => {
    emailjs.init("4YS6f0lMtQf4l4nMh");
  }, []);

  const handleSave = async () => {
    await emailjs
      .sendForm("contact_service", "contact_form", formRef.current)
      .then(
        (result) => {
          alert("Thank you contacting!!");
        },
        (error) => {
          alert("Can't send");
        }
      );

    isValid && props?.handleClose();
  };
  const { handleSubmit, errors, isValid } = useFormik({
    initialValues: state,
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Email is invalid")
        .required("Email is invalid"),
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
            color: "white",
          }}
        >
          {"GET IN TOUCH"}
        </DialogTitle>
        <DialogContent>
          <form ref={formRef}>
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
                  id="name"
                  size="small"
                  name="name"
                  required={true}
                  onChange={handleChange}
                  value={state?.data?.["name"]}
                  variant="outlined"
                  autoComplete="off"
                  sx={{
                    width: 350,
                    maxWidth: "100%",
                  }}
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
                <Typography className="typography">Your Email </Typography>
                <TextField
                  id="user_email"
                  name="user_email"
                  required={true}
                  sx={{
                    width: 350,
                    maxWidth: "100%",
                  }}
                  fullWidth
                  size="small"
                  onChange={handleChange}
                  value={state?.data?.["user_email"]}
                  variant="outlined"
                  autoComplete="off"
                  error={Boolean(errors.user_email)}
                  helperText={errors.user_email}
                />
                <Typography className="typography">Your Message </Typography>
                <TextField
                  id="message"
                  name="message"
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
          </form>
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
            </Grid>
            <Grid container className="helper" columnGap={1}>
              <Grid item xs={12} sm={12} md={12} className="buttons1">
                <Grid item xs={2.4} sm={1} md={1}>
                  <IconButton
                    href="https://www.linkedin.com/in/ankur-sharma-896bab1a0/"
                    target="_blank"
                    rel="noopener noreferrer" // This prevents security risks with target="_blank"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <WhatsAppIcon fontSize="large" />
                </Grid>
                <Grid item className="whatsapp">
                  8795988520
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
