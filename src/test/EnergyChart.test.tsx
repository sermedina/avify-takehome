import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EnergyChart from '../components/EnergyChart';
import { act } from 'react';
import { fetchEnergyData } from '../services/energyGenerationService';
import '@testing-library/jest-dom';
import example_api_response from '../mock/example_api_response.json';


// Mock service
jest.mock('../services/energyGenerationService');

//Chart mock
jest.mock('react-apexcharts', () => () => <div>Mocked Chart</div>);

// Data mock
const mockData = example_api_response;

describe('EnergyChartcomponent', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="root"></div>'; 
  });

  beforeEach(() => {
    (fetchEnergyData as jest.Mock).mockResolvedValue(mockData.data);
  });

  test('should render without crashing and fetch data correctly', async () => {

    await act(async () => {
      render(<EnergyChart />);
    });
    
    // Verify that chart titles are rendered

    expect(screen.getByText(/UK Energy Mix/i)).toBeInTheDocument();
    expect(screen.getByText(/Column Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Donut Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Area Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();

  });

  test('Show dates range', async () => {
    await act(async () => {
      render(<EnergyChart />);
    });

    await waitFor(() => {
      expect(screen.getByText("From 2019-08-12 12:30 to 2019-08-12 13:00")).toBeInTheDocument();
    });
  });


  test('Dark mode by default', async () => {
     await act(async () => {
      render(<EnergyChart />);
    });
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(screen.getByText('🌜')).toBeInTheDocument();
  });
});
