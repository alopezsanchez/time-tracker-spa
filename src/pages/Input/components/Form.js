import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as yup from "yup";
import moment from "moment";
import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { createInput } from "../../../services/api";
import LoadingButton from "./LoadingButton";
import Notification from "./Notification";

const transformFormValuesToApiPayload = (values) => ({
  user: values.user._id,
  startAt: +new Date(values.startAt),
  endAt: +new Date(values.endAt),
});

const useStyles = makeStyles((theme) => ({
  formElement: {
    margin: "30px",
  },
  actions: {
    alignItems: "center",
  },
  cancelButton: {
    marginLeft: "20px",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

function InputForm({ users }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showingNotification, setShowingNotification] = useState(false);
  const [notificationSeverity, setNotificationSeverity] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const classes = useStyles();

  const validationSchema = yup.object().shape({
    user: yup.object().nullable().required("User is required"),
    startAt: yup.date().required("Start date is required"),
    endAt: yup.date().required("End date is required"),
  });

  const initialValues = {
    user: null,
    startAt: moment(new Date())
      .set({ hour: 8, minute: "00" })
      .format("yyyy-MM-DDTHH:mm"),
    endAt: moment(new Date())
      .set({ hour: 17, minute: "00" })
      .format("yyyy-MM-DDTHH:mm"),
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          setIsSubmitting(true);
          const payload = transformFormValuesToApiPayload(values);
          try {
            await createInput(payload);
            setSuccess(true);
            setNotificationSeverity("success");
            setNotificationMessage("Your input has been saved");
            actions.resetForm();
          } catch (error) {
            setNotificationSeverity("error");
            setNotificationMessage(
              "An error has been raised. Please, try again later"
            );
          } finally {
            setIsSubmitting(false);
            setShowingNotification(true);
          }
        }}
      >
        {({ values, handleChange, errors, setFieldValue }) => (
          <Form>
            <div className={classes.formElement}>
              <Autocomplete
                options={users}
                getOptionLabel={(option) =>
                  `${option.name} (${option.username})`
                }
                style={{ width: 300 }}
                name="user"
                value={values.user}
                inputValue={users.find(({ _id }) => _id === values.user)}
                onChange={(event, newValue) => {
                  setFieldValue("user", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="User"
                    name="user"
                    error={Boolean(errors.user)}
                    helperText={errors.user}
                  />
                )}
              />
            </div>
            <div className={classes.formElement}>
              <TextField
                required
                type="datetime-local"
                label="Start at"
                name="startAt"
                value={values.startAt}
                onChange={handleChange}
                helperText={errors.startAt}
              />
            </div>
            <div className={classes.formElement}>
              <TextField
                required
                type="datetime-local"
                label="End at"
                name="endAt"
                value={values.endAt}
                onChange={handleChange}
                helperText={errors.endAt}
              />
            </div>
            <div className={`${classes.formElement} ${classes.actions}`}>
              <LoadingButton
                loading={isSubmitting}
                success={success}
                type="submit"
              />

              <Button className={classes.cancelButton}>
                <Link className={classes.link} to="/dashboard">
                  Cancel
                </Link>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <Notification
        opened={showingNotification}
        message={notificationMessage}
        severity={notificationSeverity}
        onClose={() => setShowingNotification(false)}
      />
    </>
  );
}

InputForm.displayName = "InputForm";
InputForm.propTypes = {
  users: PropTypes.array.isRequired,
};

export default InputForm;
