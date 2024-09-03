// src/redux/hackathonsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import image1 from '../assets/cardimage/1.png'
import image2 from '../assets/cardimage/2.png'
import image3 from '../assets/cardimage/3.png'
import image4 from '../assets/cardimage/4.png'
import image5 from '../assets/cardimage/5.png'
import image6 from '../assets/cardimage/6.png'

export interface Hackathon {
  id: number;
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
  image: File | string | undefined;
  level: 'Easy' | 'Medium' | 'Hard';
  status: 'Upcoming' | 'Active' | 'Past' | string;
}

interface HackathonsState {
  hackathons: Hackathon[];
  filter: {
    level: string[];
    status: string[];
    search: string;
  };
}

const initialState: HackathonsState = {
  hackathons: [
    {
        id: 1,
        image: image1,
        status: 'Upcoming',
        name: 'Data Science Bootcamp - Graded Datathon',
        startDate: new Date(Date.now() + 15 * 60 * 1000 + 22 * 1000),
        endDate: null,
        level: 'Medium',
        description: 'Join the Data Science Bootcamp and participate in a graded datathon to test your skills in real-world scenarios.',
      },
      {
        id: 2,
        image: image2,
        status: 'Upcoming',
        name: 'Data Sprint 72 - Butterfly Identification',
        startDate: new Date(Date.now() + 12 * 60 * 1000 + 34 * 1000), 
        endDate: null,
        level: 'Easy',
        description: 'Identify different species of butterflies in this beginner-friendly data sprint focused on image recognition.',
      },
      {
        id: 3,
        image: image3,
        status: 'Active',
        name: 'Data Sprint 71 - Weather Recognition',
        startDate: new Date(Date.now() - 2 * 60 * 60 * 1000), 
        endDate: new Date(Date.now() + 1 * 60 * 60 * 1000 + 17 * 60 * 1000 + 10 * 1000),
        level: 'Medium',
        description: 'Predict weather conditions using historical data in this challenging and exciting data sprint.',
      },
      {
        id: 4,
        image: image4,
        status: 'Active',
        name: 'Data Sprint 70 - Airline Passenger Satisfaction',
        startDate: new Date(Date.now() - 1 * 60 * 60 * 1000), 
        endDate: new Date(Date.now() + 11 * 60 * 1000 + 27 * 1000), 
        level: 'Hard',
        description: 'Analyze factors affecting airline passenger satisfaction in this advanced-level data sprint.',
      },
      {
        id: 5,
        image: image5,
        status: 'Past',
        name: 'Engineering Graduates Employment Outcomes',
        startDate: null,
        endDate: new Date('2022-05-16T21:00:00'), 
        level: 'Medium',
        description: 'Explore employment outcomes for engineering graduates in this past data sprint focused on career analytics.',
      },
      {
        id: 6,
        image: image6,
        status: 'Past',
        name: 'Travel Insurance Claim Prediction',
        startDate: null,
        endDate: new Date('2022-05-16T21:00:00'), 
        level: 'Easy',
        description: 'Predict travel insurance claims in this beginner-level challenge using historical claim data.',
      },
  ],
  filter: {
    level: [],
    status: [],
    search: '',
  },
};

const hackathonsSlice = createSlice({
  name: 'hackathons',
  initialState,
  reducers: {
    addHackathon: (state, action: PayloadAction<Hackathon>) => {
      state.hackathons.push(action.payload);
    },
    setFilter(state, action: PayloadAction<Partial<HackathonsState['filter']>>) {
        state.filter = { ...state.filter, ...action.payload };
      },
  },
});

export const { addHackathon, setFilter } = hackathonsSlice.actions;
export default hackathonsSlice.reducer;
