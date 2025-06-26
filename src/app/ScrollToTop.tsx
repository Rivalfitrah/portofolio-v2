'use client'
import React from 'react'
import { useEffect } from 'react'

function ScrollToTop() {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
  return (
    null
  )
}

export default ScrollToTop