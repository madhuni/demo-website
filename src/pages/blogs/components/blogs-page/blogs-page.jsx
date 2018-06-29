/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../components/ui/spinner/spinner';

// importing UI component used
import SectionHeading from '../../../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../../../components/ui/page-banner/page-banner';
import BlogItem from './components/blog-item/blog-item';

import blogsData from './blogs-data';

import './blogs-page.css';

const blogsPage = (props) => {
  const blogsItem = blogsData.map((item) => {
    return (
      <LazyLoad height={200} offset={100} placeholder={<Spinner />} once>
        <BlogItem
          key={item.id}
          title={item.title}
          date={item.date}
          url={item.url}
          imgUrl={item.imgUrl}
          {...props}
        />
      </LazyLoad>
    );
  });
  return (
    <div className="page page--blogs-page">
      <PageBanner heading={'Ethereal Machines Blogs'} classValue={'page-banner--blogs-page'}/>
      <section className="section section--blogs">
        <div className="container">
          <SectionHeading name={"Featured Blogs"} classValue={"u-margin-bottom-big u-text-center"}/>
          <div className="blog-item-container three-col-layout">
            { blogsItem }
          </div>
        </div>
      </section>
    </div>
  );
};

export default blogsPage;