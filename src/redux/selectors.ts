import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store'; // Import your store

export const selectFilteredEvents = createSelector(
  (state: RootState) => state.hackathons.hackathons,
  (state: RootState) => state.hackathons.filter,
  (events, filter) => {
    const { level, status, search } = filter;

    return events.filter(event => {
      const levelMatch = level.length === 0 || level.includes(event.level);
      const statusMatch = status.length === 0 || status.includes(event.status);
      const searchMatch = search.length === 0 || event.name.toLowerCase().includes(search.toLowerCase());

      return levelMatch && statusMatch && searchMatch;
    });
  }
);
