import React, { ReactElement, useState } from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import useStyles from "./app-styles";
import DetailCard from "./components/DetailCard/DetailCard";
import NewDetail from "./components/NewDetail/NewDetail";
import { userData } from "./userData.model";

function App() {
  const classes = useStyles();
  const [userDataFull, setUserDataFull] = useState<userData[]>([]);
  const [currentUserData, setCurrentUserData] = useState<
    userData | undefined
  >();

  const addDetailHandler = (detailData: userData) => {
    setUserDataFull((prevUserState) => [detailData, ...prevUserState]);
  };

  const updateDetailHandler = (
    id: string,
    updatedData: { name: string; age: string }
  ) => {
    setUserDataFull((prevUserState) => {
      return prevUserState.map((user) => {
        if (user.id === id) {
          user.name = updatedData.name;
          user.age = updatedData.age;
        }
        return user;
      });
    });
    setCurrentUserData((prevData) => {
      if (prevData !== undefined) {
        return { ...prevData, edit: false };
      }
    });
  };

  const onDeleteHandler = (idOfUser: string) => {
    setUserDataFull((prevUserState) =>
      prevUserState.filter((item) => item.id !== idOfUser)
    );
  };

  //implement edit functionality
  const onEditHandler = (
    name: string,
    age: string,
    id: string,
    edit: boolean
  ) => {
    setCurrentUserData({ name, age, id, edit: true });
  };

  let displayContent: JSX.Element[] | ReactElement = (
    <p>No User data entered yet!</p>
  );

  if (userDataFull !== undefined && userDataFull.length > 0) {
    displayContent = userDataFull.map((userData) => (
      <DetailCard
        key={userData.id}
        id={userData.id}
        name={userData.name}
        age={userData.age}
        edit={userData.edit}
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
      />
    ));
  }

  return (
    <div>
      <CssBaseline />
      <Typography variant="h1" align="center" gutterBottom color="textPrimary">
        Enter user data
      </Typography>

      <div className={classes.app}>
        <div className={classes.appItem}>
          <NewDetail
            onAddDetail={addDetailHandler}
            onUpdateDetail={updateDetailHandler}
            currentData={currentUserData}
          />
        </div>
        <div className={classes.appItem}>{displayContent}</div>
      </div>
    </div>
  );
}

export default App;
