import { TextField, Button } from "@material-ui/core";
import useStyles from "./detail-form";
import React, { useEffect, useState } from "react";
import { userData } from "../../userData.model";

interface detailFormProps {
  onSaveUserData: (userData_: { name: string; age: string }) => void;
  currentData: userData | undefined;
  onUpdateDetails: (
    id: string,
    updatedData: { name: string; age: string }
  ) => void;
}

interface userDetails_interface {
  enteredName: string;
  enteredAge: string;
}

function DetailForm(props: detailFormProps) {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState<userDetails_interface>({
    enteredName: "",
    enteredAge: "",
  });

  type inputEvent = React.ChangeEvent<HTMLInputElement>;

  const onChangeHandler = (event: inputEvent) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setUserDetails((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const resetForm = () => {
    setUserDetails((prevData) => {
      return {
        ...prevData,
        enteredName: "",
        enteredAge: "",
      };
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      props.currentData &&
      event.type === "submit" &&
      props.currentData.edit
    ) {
      const userData_ = {
        name: userDetails.enteredName,
        age: userDetails.enteredAge,
      };
      props.onUpdateDetails(props.currentData.id, userData_);
      resetForm();
      return;
    }
    if (event.type === "submit") {
      const userData_ = {
        name: userDetails.enteredName,
        age: userDetails.enteredAge,
      };
      props.onSaveUserData(userData_);
      resetForm();
      return;
    }
  };
  useEffect(() => {
    if (props.currentData && props.currentData.edit) {
      setUserDetails((prevData) => {
        if (props.currentData) {
          return {
            ...prevData,
            enteredName: props.currentData.name,
            enteredAge: props.currentData.age,
          };
        }
        return prevData;
      });
    }
    console.log(props.currentData);
  }, [props.currentData]);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <TextField
        className={classes.textfield}
        id="outlined-basic"
        label="Name"
        name="enteredName"
        variant="outlined"
        value={userDetails.enteredName}
        onChange={onChangeHandler}
      />

      <br />

      <TextField
        className={classes.textfield}
        id="outlined-basic"
        label="Age"
        variant="outlined"
        name="enteredAge"
        value={userDetails.enteredAge}
        onChange={onChangeHandler}
      />
      <br />

      {props.currentData && props.currentData.edit ? (
        <Button
          type="submit"
          className={classes.buttonSubmit}
          variant="contained"
        >
          Update Me!
        </Button>
      ) : (
        <Button
          type="submit"
          className={classes.buttonSubmit}
          variant="contained"
        >
          Add me!
        </Button>
      )}
    </form>
  );
}
export default DetailForm;
