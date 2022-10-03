import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPersonAction } from "../redux/reducer";
import { toggleModal } from "./../redux/reducer";

let AddPerson = () => {
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
      id: Date.now(),
    };
    dispatch(addPersonAction(persons));
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
    </>
  );
};

export default AddPerson;
