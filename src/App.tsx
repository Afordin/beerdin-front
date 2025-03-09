import './App.css';

import { ChartCard } from './components/ChartCard';
import TopChannelsCard from './components/TopChannelsCard';
import { RootLayout } from './layouts/RootLayout/RootLayout';
import { ChartType } from './models/chart';

function App() {
  return (
    <>
      <RootLayout>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 px-6 md:px-14 ">
          <div className="col-span-1 lg:col-span-2 w-full">
            <ChartCard
              chartCardData={{
                title: 'Message count',
                subTitle: 'Displays the number of messages sent on the server during a period of time. ',
                urlEndpoint: 'test',
                chartType: ChartType.BarChart
              }}
            />
          </div>

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
              urlEndpoint: 'test',
              title: 'User leaderboard',
              subTitle: 'Lists the most outstanding users according to their participation in the server.',
              chartType: ChartType.Table
            }}
          />

          <ChartCard
            chartCardData={{
              title: 'Top users',
              subTitle: 'Displays the number of messages sent on the server during a period of time. ',
              urlEndpoint: 'test',
              chartType: ChartType.BarChart
            }}
          />

          <ChartCard
            chartCardData={{
              urlEndpoint: 'test',
              title: 'Top reactions',
              subTitle: 'It presents the most frequently used reactions in the server messages.',
              chartType: ChartType.BarList
            }}
          />
        </div>
      </RootLayout>
    </>
  );
}

export default App;
