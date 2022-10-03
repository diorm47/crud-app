import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction, toggleModal } from "./../redux/reducer";
import AddPerson from "./add-person";
import AddedPersons from "./added-persons";
import EditPerson from "./edit-person";
import "./style.css";
import Pagination from "./paginator";

let Persons = () => {
  const dispatch = useDispatch();
  let modal = useSelector((state) => state.modal);
  let persons = useSelector((state) => state.persons);

  const onSearch = (value) => {
    dispatch(searchAction(value));
  };

  return (
    <>
      <div className={!modal ? "persons_wrapper" : "set_modal"}>
        <div className="top_bar">
          <div className="search_block">
            <TextField
              label="Qidirish"
              variant="standard"
              type="search"
              onChange={(e) => onSearch(e.target.value)}
              sx={{
                width: "400px",
              }}
            />
          </div>

          <div className="add_block">
            <Button
              variant="outlined"
              onClick={() => dispatch(toggleModal(true))}
            >
              Qo'shish
            </Button>
          </div>
        </div>
        <div className="content">
          <div className="keys">
            <div className="number" onClick={}>
              <p>N/</p>
            </div>
            <div className="namee">
              <p>Ism</p>
            </div>
            <div className="agee">
              <p>Yosh</p>
            </div>
            <div className="genderr">
              <p>Jins</p>
            </div>
            <div className="district">
              <p>Manzil</p>
            </div>
            <div className="actions">
              <p>Amallar</p>
            </div>
          </div>

          <AddedPersons />
        </div>
        <div className="paginator">
          <Pagination />
        </div>
      </div>

      <div className={modal ? "add_person_form" : "hide_add"}>
        <h1>Odam qo'shish</h1>
        <AddPerson />
      </div>

      <EditPerson />
    </>
  );
};

export default Persons;
