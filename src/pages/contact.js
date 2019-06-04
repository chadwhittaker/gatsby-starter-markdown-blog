import React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Contact my twitter!{' '}
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          @cwhit
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
