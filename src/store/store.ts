import { configureStore, Store, ThunkDispatch } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { AnyAction } from 'redux';

import app from './app/slice';
import home from './home/slice';
import IStore from './interfaces/IStore';
import contactForm from './app/contactForm/slice';
import leavingForm from './app/leavingForm/slice';
import blogs from './blogs/slice';
import subscribeForm from './app/subscribeForm/slice';
import downloadForm from './app/downloadForm/slice';
import bracketology from './app/bracketology/slice';
import trainingSimulatorSlice from './interactiveTrainingSimulator/reducer';
import careers from './careers/slice';
import cursorFollower from './cursorFollower/slice';
import caseStudySelector from './caseStudySelector/slice';
import designPortfolio from './designPortfolio/slice';
import videoFullScreen from './app/videoFullScreenSlice/slice';

let store: Store<IStore>;

export const setupStore = (preloadedState: IStore) => (
  configureStore({
    reducer: {
      home,
      app,
      contactForm,
      videoFullScreen,
      blogs,
      leavingForm,
      subscribeForm,
      downloadForm,
      bracketology,
      trainingSimulatorSlice,
      careers,
      cursorFollower,
      caseStudySelector,
      designPortfolio,
    },
    preloadedState,
  })
);

export const initializeStore = (preloadedState: IStore) => {
  let initialStore = store ?? setupStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    initialStore = setupStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return initialStore;
  // Create the store once in the client
  if (!store) store = initialStore;

  return initialStore;
};

export function useStore(initialState: IStore) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
