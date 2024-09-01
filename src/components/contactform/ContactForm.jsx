import styles from "./contactform.module.css";
import { useId, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoPersonAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const nameRef = useRef();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Input must be minimum 3 characters")
        .max(50, "Input must be maximum 50 characters")
        .required("Required"),
      number: Yup.string()
        .min(3, "Input must be minimum 3 characters")
        .max(50, "Input must be maximum 50 characters")
        .required("Required"),
    }),
    onSubmit: (values, actions) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      dispatch(addContact(newContact));
      actions.resetForm();
      nameRef.current.focus();
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          ref={nameRef}
          id={nameId}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error} name="name">
            {formik.errors.name}
          </div>
        ) : null}

        <label htmlFor={numberId}>Number</label>
        <input
          className={styles.input}
          type="text"
          name="number"
          id={numberId}
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.error} name="number">
            {formik.errors.number}
          </div>
        ) : null}

        <button type="submit" className={styles.submit}>
          <span>Add Contact</span>
          <IoPersonAdd />
        </button>
      </form>
    </div>
  );
}
