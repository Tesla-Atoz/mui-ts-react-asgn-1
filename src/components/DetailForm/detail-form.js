import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonSubmit: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "30px 35px",
  },
  form: {
    width: "25%",
    border: "2px solid red",
    backgroundColor: "bisque",
  },

  textfield: {
    margin: "15px 32px",
  },
}));

export default useStyles;
