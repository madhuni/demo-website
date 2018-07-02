/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import './careers.css';

import PageBanner from '../../components/ui/page-banner/page-banner';
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import CareersGenericForm from './components/careers-generic-form/careers-generic-form';
import Modal from '../../components/ui/modal/modal';
import FormSuccessMsg from '../../components/pages-component/form-success-msg/form-success-msg';

import postJobEnquiry from '../../services/api/post-job-enquiry';
import axios from 'axios';

class Careers extends Component {
  constructor(props) {
    super(props);

    this.formData = new FormData();
  }

  state = {
    formValid: true,
    errorMsg: null,
    formSubmissionStart: false,
    showModal: false
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  
  onClearningFormData = () => {
    this.formData.delete('name');
    this.formData.delete('contact_number');
    this.formData.delete('email');
    this.formData.delete('gender');
    this.formData.delete('position');
    this.formData.delete('resume');
    this.formData.delete('message');
  }

  onSubmitCallBack = (data) => {
    if (data.status === 201) {
      document.querySelector(".form--careers-generic-from").reset();
      this.onClearningFormData();
      this.setState({
        ...this.state,
        formValid: true,
        errorMsg: null,
        formSubmissionStart: false,
        showModal: true
      });
    } else {
      if (data.response) {
        // console.log(data.response.data);
        this.setState({
          ...this.state,
          formValid: false,
          errorMsg: data.response.data,
          formSubmissionStart: false
        });
      }
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      formSubmissionStart: true
    });

    postJobEnquiry(this.onSubmitCallBack, this.formData);
  }

  onInputChange = (event) => {
    const inputFieldName = event.target.name;
    // console.log(inputFieldName);
    switch (event.target.type) {
      case 'text':
        if (inputFieldName === 'name') {
          this.formData.append('name', event.target.value);
        } else if (inputFieldName === 'contact_number') {
          const contactNo = event.target.value;
          this.formData.append('contact_number', contactNo);
        }
        break;
      
      case 'email':
        if (inputFieldName === 'email') {
          this.formData.append('email', event.target.value);
        }
        break;
      
      case 'select-one':
        if (inputFieldName === 'gender') {
          if (event.target.value === 'Male') {
            this.formData.append('gender', 'M');
          } else {
            this.formData.append('gender', 'F');
          }
        } else if (inputFieldName === 'position') {
          this.formData.append('position', event.target.value);
        }
        break;

      case 'file':
        this.formData.append('resume', event.target.files[0]);
        break;

      case 'textarea':
        this.formData.append('message', event.target.value);
        break;

      default:
        break;
    }

    this.setState({
      ...this.state,
      formData: this.formData,
    });
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.showModal} clicked={this.closeModal}>
          <FormSuccessMsg />
        </Modal>
        <div className="page page--careers">
          <PageBanner heading={"Careers in Ethereal Machines"} subHeading={"Make your dream job come true"} classValue={"page-banner--careers"} />
          <section className="section section--openings">
            <div className="container">
              <SectionHeading classValue={'u-margin-bottom-big u-text-center'} name={'Current Openings in Ethereal Machines'} />
              <div className="current-openings">
                <p className="u-text-center">Sorry, we have no current openings.</p>
              </div>
            </div>
          </section>
          <section className="section section--careers-form">
            <div className="container">
              <SectionHeading name={"Didn't discover what you were searching for?"} classValue={"u-margin-bottom-big u-text-center"} hasSubHeading={true} subHeading={"You can simply drop your profile and we will connect with you"}/>
              <CareersGenericForm onInputChange={this.onInputChange} onSubmitHandler={this.onSubmitHandler} formSubmissionStart={this.state.formSubmissionStart} errorMsg={this.state.errorMsg}/>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
    
export default Careers;