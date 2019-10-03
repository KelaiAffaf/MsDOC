/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"
import "./layout.css"

const Footer = styled.div`
display: flex;
font-family: 'Josefin Sans', sans-serif;
margin-left: 0ch;
background-color:#444444;
height: 100px;
width:100%;

`;
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          
          padding: `0px 0rem 0rem`,
          paddingTop: 0,
          paddingbottom:0,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with love
          {` `}
          
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
