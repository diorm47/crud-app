import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editPersonAction, setEditModeAction } from "../redux/redux";
import Snackbar from "./snackbar";

let EditPerson = () => {
  const edPer = useSelector((state) => state.edit);
  const editMode = useSelector((state) => state.setMode);
  const [snackbar, setSnackbar] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const persons = {
      name: data.ism || edPer.name,
      age: data.yosh || edPer.age,
      gender: data.jins || edPer.gender,
      place: data.manzil || edPer.place,
      id: edPer.id,
    };
    dispatch(editPersonAction(persons));

    if (data) {
      setSnackbar(true);
    }
    setTimeout(() => {
      setSnackbar(false);
      dispatch(setEditModeAction(false));
    }, 1200);
  };

  return (
    <div className={editMode ? "edit_mode_wrapper" : "hide_edit_mode"}>
      <div className="edit_mode">
        <h1>Edit person</h1>

        <div className="discard">
          <input
            type="button"
            value="X"
            onClick={() => dispatch(setEditModeAction(false))}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={edPer.name}
            placeholder="Ism"
            {...register("ism", { required: true })}
          />
          {errors.ism && <span>Ism to'ldirish majburiy</span>}
          <input
            defaultValue={edPer.age}
            placeholder="Yosh"
            type="number"
            {...register("yosh", { required: true })}
          />
          {errors.yosh && <span>Ism to'ldirish majburiy</span>}
          <select
            defaultValue={edPer.gender}
            placeholder="jins"
            {...register("jins")}
          >
            <option value="erkak">Erkak</option>
            <option value="ayol">Ayol</option>
            <option value="boshqa">Boshqa</option>
          </select>
          <input
            defaultValue={edPer.place}
            placeholder="Manzil"
            {...register("manzil")}
          />

          <input type="submit" />
        </form>
      </div>

      {!snackbar || <Snackbar props={" tahrirlandi!!!"} />}
    </div>
  );
};

export default EditPerson;
