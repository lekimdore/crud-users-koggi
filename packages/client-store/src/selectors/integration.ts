import { RootState } from '..';

export const integrationSelector = {
  getSites: (state: RootState) => state.integration.sites,
  getCurrentSite: (state: RootState) => state.integration.currentSite,
};
