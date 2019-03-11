import { lazy } from 'react';

export const NotFound = lazy(() => import(/* webpackChunkName: "404" */ './404'));
export const Home = lazy(() => import(/* webpackChunkName: "Home" */ './home'));
export const About = lazy(() => import(/* webpackChunkName: "About" */ './about'));
export const Work = lazy(() => import(/* webpackChunkName: "Work" */ './work'));
export const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ './contact'));