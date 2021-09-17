import React from "react";
import DetailForm from "../DetailForm/DetailForm";
import { userData } from "../../userData.model";

interface userDataFromForm {
  name: string;
  age: string;
}

interface NewDetailProps {
  onAddDetail: (x: userData) => void;
  onUpdateDetail: (
    id: string,
    updatedData: { name: string; age: string }
  ) => void;
  currentData: userData | undefined;
}

function NewDetail(props: NewDetailProps) {
  const saveDetailDataHandler = (enteredDetailData: userDataFromForm) => {
    const detailData = {
      ...enteredDetailData,
      id: Math.random().toString(),
      edit: false,
    };
    props.onAddDetail(detailData);
  };
  return (
    <div>
      <DetailForm
        onSaveUserData={saveDetailDataHandler}
        currentData={props.currentData}
        onUpdateDetails={props.onUpdateDetail}
      />
    </div>
  );
}

export default NewDetail;
