import React from 'react'
import { Formik, Field ,Form} from 'formik';
import styles from "./ReactStyleModule.module.css";
import { useNavigate } from 'react-router-dom';

export const ReactStyleModule = () => {
  const navigate = useNavigate();
  const handleSubmit = (values)=> {
    // alert(`You entered ${values.userName}`)
    localStorage.setItem("username",values.userName);
    navigate("/users");
  };
  const handleValidate = (values)=> {
    const errors ={};
    if(!values.userName){
     errors.userName ="userName is required";
    }
    if(!values.password){
      errors.password ="password is required";
    }
    return errors;
  };
  return (
    <Formik initialValues={{userName:"", password:""}} onSubmit={handleSubmit} validate={handleValidate} validateOnBlur={false} validateOnChange={true}>
      {({errors}) =>
    <Form className={styles.form}>
      <h1>Welcome!</h1>

        <Field type='text' name="userName" placeholder="Enter userName" className={styles.field}/>
        {errors.userName && <p className={styles.error}>{errors.userName}</p>}

        <Field type='password' name="password" placeholder="*******" className={styles.field}/>
        {errors.password && <p className={styles.error}>{errors.password}</p>}

      <input type='submit' value="Submit" className={styles["submit-button"]}/>
    </Form>
  }
    </Formik>
  )
}
