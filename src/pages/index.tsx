import React, { useState } from 'react'
import { isBrowser, isMobile, isTablet } from 'react-device-detect';
import loadable from '@loadable/component'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Mobile = loadable(() => import('../components/homeMobile/homeMobile'))
const Home = loadable(() => import('../components/homeSlides/home'))

type HomeView = 'unknown' | 'mobile' | 'browser';

const getContent = (view: HomeView) => {
  switch(view) {
    case 'mobile':
      return <Mobile />;
    case 'browser':
      return <Home />;
    default:
      return <></>;
  }
}

const IndexPage = () => {
  const [view, setView] = useState<HomeView>('unknown');

  useState(() => {
    if (isMobile) {
      setView('mobile');
    } if (isTablet) {
      setView('browser');
    } else if (isBrowser) {
      setView('browser');
    }
  })

  const content = getContent(view);

  return (
    <Layout>
      <SEO title="Home" />
      {content}
    </Layout>
  )
}

export default IndexPage
