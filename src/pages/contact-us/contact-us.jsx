/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import './contact-us.css';

import PageBanner from '../../components/ui/page-banner/page-banner';
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import ContactUsForm from './components/contact-us-form/contact-us-form';

import postGeneralQuery from '../../services/api/post-general-query';
import postMediaQuery from '../../services/api/post-media-query';
import postDistributorQuery from '../../services/api/post-distributor-query';

import * as utilityFunctions from '../../utility-functions/utility-functions';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.formData = new FormData();
    this.natureOfQuery = null;
    this.isStateRequired = false;
    this.allowStateField = false;
  }

  state = {
    formValid: true,
    errorMsg: null,
    formSubmissionStart: false
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClearningFormData = () => {
    this.formData.delete('name');
    this.formData.delete('email');
    this.formData.delete('contact_number');
    this.formData.delete('message');
    this.formData.delete('region');
    this.formData.delete('state');
  }

  resetProperties = () => {
    this.natureOfQuery = null;
    this.isStateRequired = false;
    this.allowStateField = false;
  }

  onSubmitCallBack = (data) => {
    if (data.status === 201) {
      document.querySelector(".form--contact-us").reset();
      this.onClearningFormData();
      this.resetProperties();
      utilityFunctions.clearSelectField('.select-input');
      this.setState({
        ...this.state,
        formValid: true,
        errorMsg: null,
        formSubmissionStart: false
      });
    } else {
      if (data.response) {
        console.log(data.response.data);
        this.setState({
          ...this.state,
          formValid: false,
          errorMsg: data.response.data,
          formSubmissionStart: false
        });
        console.log(this.natureOfQuery);
      }
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      formSubmissionStart: true
    });

    switch (this.natureOfQuery) {
      case 'General Queries':
        postGeneralQuery(this.onSubmitCallBack, this.formData);
        break;
      case 'Become a reseller or distributor':
        postDistributorQuery(this.onSubmitCallBack, this.formData);
        break;
      case 'Media Queries':
        postMediaQuery(this.onSubmitCallBack, this.formData);
        break;
    
      default:
        alert('Something is wrong. Please try again.');
        this.setState({
          ...this.state,
          formSubmissionStart: false
        });
        break;
    }
  }

  onInputChange = (event) => {
    const inputFieldName = event.target.name;
    const targetValue = event.target.value;
    const targetType = event.target.type;
    switch (targetType) {
      case 'text':
        if (inputFieldName === 'name') {
          this.formData.append('name', targetValue);
        } else if (inputFieldName === 'contact_number') {
          const contactNo = targetValue;
          this.formData.append('contact_number', contactNo);
        }
        break;

      case 'email':
        if (inputFieldName === 'email') {
          this.formData.append('email', targetValue);
        }
        break;

      case 'select-one':
        if (inputFieldName === 'natureOfQuery') {
          this.natureOfQuery = targetValue;
          if (targetValue === 'General Queries') {
            this.allowStateField = true;
          } else {
            this.allowStateField = false;
            this.isStateRequired = false;
          }
          // console.log('allowStateField', this.allowStateField, 'isStateRequired', this.isStateRequired);
        } else if (inputFieldName === 'region') {
            this.formData.append('region', targetValue);
            if (targetValue.toLowerCase() === 'india' && this.allowStateField === true) {
              this.isStateRequired = true;
              // console.log('allowStateField', this.allowStateField, 'isStateRequired', this.isStateRequired);
            } else {
              this.isStateRequired = false
              // console.log('allowStateField', this.allowStateField, 'isStateRequired', this.isStateRequired);
            }
        } else if (inputFieldName === 'state') {
          this.formData.append('state', targetValue);
        }
        break;

      case 'textarea':
        this.formData.append('message', targetValue);
        break;

      default:
        break;
    }

    this.setState({
      ...this.state,
      formData: this.formData,
    });
  }

  render() {
    return (
      <div className="page page--contact-us">
        <PageBanner heading={"Contact Us"} subHeading={"Want to share or ask something, contact us"} classValue={"page-banner--careers"} />
        <section className="section section--contact-us-form">
          <div className="container">
            <SectionHeading name={"Get in Touch!"} classValue={"u-margin-bottom-big u-text-center"} hasSubHeading subHeading={"Please fill in your details to reach us and we will get back to you"}/>
            <ContactUsForm onInputChange={this.onInputChange} onSubmitHandler={this.onSubmitHandler} formSubmissionStart={this.state.formSubmissionStart} errorMsg={this.state.errorMsg} natureOfQuery={this.natureOfQuery} isStateRequired={this.isStateRequired}/>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactUs;