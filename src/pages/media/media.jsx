/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../services/axios/axios';
import * as actionType from '../../store/actions/action-type';

// importing the API used for this page
import getMedia from '../../services/api/get-media';

// importing UI component used
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../components/ui/page-banner/page-banner';
import MediaItem from './components/media-item/media-item';
import ContentLoader from '../../components/ui/content-loader/content-loader';
import ContactUsBanner from '../../components/pages-component/contact-us-banner/contact-us-banner';

import './media.css';

class Media extends Component {

  state = {
    loadingContent: this.props.firstRun ? true : false
  }

  onGetMedia = (data) => {
    this.setState({
      loadingContent: false
    });

    if (data.status === 'error') {
      data.data.response ? console.log(data.data.response) : console.log(data.data);
    } else {
      this.props.onUpdateMediaItems(data);
      this.props.onUpdateFirstRun(false);
    }
  }

  componentDidMount() {
    // scrolling the component to the top when the page is mounted
    window.scrollTo(0, 0);

    /**
     * If the component is being loaded for the first time
     * then fetch the media items available on the server. If component is
     * not loaded for the first time, no need to fetch the media
     * items from the server. The Redux Store will have all the
     * available items.
    */
    if (this.props.firstRun) {
      getMedia(this.onGetMedia);
    }
  }

  render() {
    let media = [];

    this.props.mediaItems.map(item => {
      media.push(
        <MediaItem key={item.id} item={item} />
      );
    });

    return (
      <div className="page page--media">
        <PageBanner heading={"Ethereal Machines in Media"} subHeading={"Explore what happens in Ethereal Machines"}/>
        <section className="section section--media">
          <div className="container">
            <SectionHeading name={"What media says about us"} classValue={"u-margin-bottom-big u-text-center"}/>
            <div className="media-container">
              {
                this.state.loadingContent ? 
                <ContentLoader /> :
                media
              }
            </div>
          </div>
        </section>
        <section className="section section--contact-us">
          <div className="container">
              <SectionHeading name={"Contact Us"} classValue={"u-margin-bottom-big u-text-center"}/>
              <ContactUsBanner
                firstText={"Want to cover our story?"}
                secondText={"Contact us for more details."}
              />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstRun: state.media.firstRun,
    mediaItems: state.media.mediaItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateFirstRun: (firstRun) => {
      dispatch({
        type: actionType.UPDATE_FIRST_RUN_MEDIA,
        value: firstRun
      });
    },
    onUpdateMediaItems: (mediaItems) => {
      dispatch({
        type: actionType.UPDATE_MEDIA_ITEMS,
        value: mediaItems
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);