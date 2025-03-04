import './App.css';

import { ChartCard } from './components/ChartCard';
import TopChannelsCard from './components/TopChannelsCard';
import { RootLayout } from './layouts/RootLayout/RootLayout';
import { ChartType } from './models/chart';

function App() {
  return (
    <>
      <RootLayout>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          <TopChannelsCard />
          <ChartCard
            chartCardData={{
              title: 'Peak hours',
              subTitle: 'It represents the times of the day when the server is most active.',
              chartType: ChartType.LineChart,
              urlEndpoint: 'test'
            }}
          />

          <ChartCard
            chartCardData={{
              title: 'User roles',
              subTitle: 'Visualizes the distribution of users according to their roles in the community.',
              chartType: ChartType.PieChart,
              urlEndpoint: 'test'
            }}
          />

          <ChartCard
            chartCardData={{
              title: 'Top Channels',
              subTitle: 'Highlights the channels with the highest activity based on the number of messages sent.',
              chartType: ChartType.BarList
            }}
          />
        </div>
      </RootLayout>
    </>
  );
}

export default App;
