// src/pages/question.js

import React from 'react';
import SEO from '../components/seo';
import ContactForm from '../components/ContactUs';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import ContactUs from '../components/ContactUs';

const QuestionPage = () => {
  return (
    <>
      <SEO title="Question" />
      <PageSpace top={85} bottom={100}></PageSpace>
 
     <ContactUs/>
    </>
  );
};

export default QuestionPage;
