import { makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "3px solid black",
    columnGap: "30px",
  },

  appItem: {
    flexGrow: 1,
    borderColor: "3px solid blue",
    margin: "30px",
  },
}));

export default useStyles;
