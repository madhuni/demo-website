/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import Form from '../../../../components/pages-component/form/form';
import ErrorBox from '../../../../components/pages-component/form/components/error-box';
import Button from '../../../../components/pages-component/button/button';
import InputText from '../../../../components/pages-component/form-controls/input-text';
import InputEmail from '../../../../components/pages-component/form-controls/input-email';
import InputFile from '../../../../components/pages-component/form-controls/input-file';
import Select from '../../../../components/pages-component/form-controls/select';
import TextArea from '../../../../components/pages-component/form-controls/text-area';

const careersGenericForm = (props) => {
  const possiblePositions = [
    {id: 3, value: 'Design Engineer'},
    {id: 4, value: 'Product Manager'},
    {id: 7, value: 'Embeded Engineer'},
    {id: 8, value: 'Electronics Engineer'},
    {id: 2, value: 'Frontend Developer'},
    {id: 1, value: 'Backend Developer'},
    {id: 10, value: 'Graphics Designer'},
    {id: 6, value: 'Sales and Marketing'},
    {id: 5, value: 'Internship'},
    {id: 9, value: 'Others'},
  ];

  const genderOptions = ["Female", "Male", "I don't want to disclose"];

  return (
    <Form {...props} classValue={"form form--careers-generic-form"}>
      <div className="form-controls three-col-layout">
        <InputText labelName={"Name"} inputName={"name"} placeholder={"Enter Name"} isRequired {...props}/>
        <InputEmail labelName={"Email"} inputName={"email"} placeholder={"Enter Email"} isRequired {...props}/>
        <InputText labelName={"Contact Number"} inputName={"contact_number"} placeholder={"Contact No. with Country code (e.g. +91XXXXXXXXXX)"} isRequired {...props}/>
        {/* <Select labelName={"Gender"} inputName={"gender"} options={genderOptions} defaultValue={"I am.."} isRequired {...props}/> */}
        <Select labelName={"Position"} inputName={"position"} options={possiblePositions} defaultValue={"--select--"} isRequired {...props}/>
        <InputFile labelName={"Resume"} inputName={"resume"} isRequired {...props}/>
        <TextArea labelName={"Message"} inputName={"message"} placeholder={"Leave Your Message..."} isRequired {...props}/>
      </div>
      { props.errorMsg ? <ErrorBox isRequired {...props} /> : null}
      <Button classValue={"form-btn"} disabled={props.formSubmissionStart}>Submit</Button>
    </Form>
  );
};

export default careersGenericForm;