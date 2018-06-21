/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import Form from '../../../../components/pages-component/form/form';
import ErrorBox from '../../../../components/pages-component/form/components/error-box';
import Button from '../../../../components/pages-component/button/button';
import InputText from '../../../../components/pages-component/form-controls/input-text';
import InputEmail from '../../../../components/pages-component/form-controls/input-email';
import Select from '../../../../components/pages-component/form-controls/select';
import TextArea from '../../../../components/pages-component/form-controls/text-area';

import stateOptions from './state-options';

class ContactUsForm extends Component {
  render() {
    const regionOptions = ['India', 'International'];
    const natureOfQuery = ['General Queries', 'Become a reseller or distributor', 'Media Queries'];

    return (
      <Form {...this.props} classValue={"form form--contact-us"}>
        <div className="form-controls single-col-layout">
          <Select labelName={"Nature of Query"} inputName={"natureOfQuery"} options={natureOfQuery} defaultValue={"--select--"} isRequired {...this.props} />
          <InputText labelName={"Name"} inputName={"name"} placeholder={"Enter Name"} isRequired {...this.props} />
          <InputEmail labelName={"Email"} inputName={"email"} placeholder={"Enter Email"} isRequired {...this.props} />
          <InputText labelName={"Contact Number (+91XXXXXXXXXX)"} inputName={"contact_number"} placeholder={"Enter Contact Number"} {...this.props} />
          { this.props.natureOfQuery === 'General Queries' ?
            <Select labelName={"Region"} inputName={"region"} options={regionOptions} defaultValue={"--select--"} isRequired {...this.props} /> :
            null
          }
          {
            this.props.isStateRequired ? 
            <Select labelName={"State"} inputName={"state"} options={stateOptions} defaultValue={"--select state--"} {...this.props} /> :
            null
          }
          <TextArea labelName={"Message"} inputName={"message"} placeholder={"Leave Your Message..."} isRequired {...this.props} />
        </div>
        { this.props.errorMsg ? <ErrorBox isRequired {...this.props} /> : null }
        <Button classValue={this.props.formSubmissionStart ? "form-btn form-btn--disabled" : "form-btn"}>Submit</Button>
      </Form>
    );
  }
}

export default ContactUsForm;