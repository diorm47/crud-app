import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPersonAction } from "../redux/redux";
import { toggleModal } from "../redux/redux";
import Snackbar from "./snackbar";

let AddPerson = () => {
  let personsData = useSelector((state) => state.persons);
  const [snackbar, setSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const persons = {
      name: data.ism,
      age: data.yosh,
      gender: data.jins || "---",
      place: data.manzil || "---",
      id: personsData.slice(-1)[0].id + 1,
    };
    dispatch(addPersonAction(persons));
    if (data) {
      setSnackbar(true);
    }
    setTimeout(() => {
      setSnackbar(false);
      dispatch(toggleModal(false));
    }, 1200);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="add_person_modal">
        <div className="discard">
          <input
            type="button"
            value="X"
            onClick={() => dispatch(toggleModal(false))}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Ism" {...register("ism", { required: true })} />
          {errors.ism && <span>Ism to'ldirish majburiy</span>}
          <input
            placeholder="Yosh"
            type="number"
            {...register("yosh", { required: true })}
          />
          {errors.yosh && <span>Yosh to'ldirish majburiy</span>}
          <select placeholder="jins" {...register("jins")}>
            <option value="Erkak">Erkak</option>
            <option value="Ayol">Ayol</option>
            <option value="Boshqa">Boshqa</option>
          </select>
          <input placeholder="Manzil" {...register("manzil")} />

          <input type="submit" />
        </form>
      </div>
      {!snackbar || <Snackbar props={" qo'shildi!!!"} />}
    </>
  );
};

export default AddPerson;
