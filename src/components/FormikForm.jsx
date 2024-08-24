import React from 'react'
import { Formik, Field ,Form} from 'formik';

export const FormikForm = () => {
  const handleSubmit = (values)=> {
    alert(`You entered ${values.userName}`)
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
    <Form>
      <h1>controlled Form Example</h1>
      <label>
        Username:
        <Field type='text' name="userName"/>
        {errors.userName && <p style={{color:"red"}}>{errors.userName}</p>}
      </label>
      <label>
        Password:
        <Field type='password' name="password"/>
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
      </label>
      <input type='submit' value="Submit" />
    </Form>
  }
    </Formik>
  )
}
