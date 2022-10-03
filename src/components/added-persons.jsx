import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editPersonAction,
  removePersonAction,
  setEditModeAction,
} from "../redux/redux";
import Snackbar from "./snackbar";

let AddedPersons = () => {
  const persons = useSelector((state) => state.persons);
  const searched = useSelector((state) => state.searchED);
  const [snackbar, setSnackbar] = useState(false);
  const dispatch = useDispatch();

  const removePerson = (person) => {
    dispatch(removePersonAction(person));
  };

  const editPerson = (person) => {
    dispatch(editPersonAction(person));
  };

  const deleteClick = () => {
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
  };

  // const keys = ["name", "id", "age", "gender", "place"];

  // const search = (data) => {
  //   return data.filter((data) =>
  //     keys.some((key) => data[key].toLowerCase().includes(searched))
  //   );
  // };

  const search = (data) => {
    return data.filter((data) => data.name.toLowerCase().includes(searched));
  };

  return (
    <div className="persons">
      <div className="persons_list">
        {search(persons).map((person) => (
          <div key={person.id} className="person">
            <div className="number_id">
              <p>{person.id}</p>
            </div>
            <div className="name">
              <p>{person.name}</p>
            </div>
            <div className="age">
              <p>{person.age}</p>
            </div>
            <div className="gender">
              <p>{person.gender}</p>
            </div>
            <div className="place">
              <p>{person.place}</p>
            </div>
            <div className="buttons">
              <div className="edit">
                <Tooltip title="edit" placement="right-end" arrow>
                  <IconButton>
                    <EditIcon
                      onClick={() => {
                        editPerson(person);
                        dispatch(setEditModeAction(true));
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </div>

              <div className="delete">
                <Tooltip title="delete" placement="right-end" arrow>
                  <IconButton>
                    <Delete
                      fontSize="small"
                      onClick={() => {
                        removePerson(person.id);
                        deleteClick();
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!snackbar || <Snackbar props={" o'chirildi!!!"} />}
    </div>
  );
};

export default AddedPersons;
