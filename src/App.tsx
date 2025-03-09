import './App.css';

import { BubbleBackground } from './components/BubbleBackground';
import { ChartCard } from './components/ChartCard';
import TopChannelsCard from './components/TopChannelsCard';
import { Button } from './components/ui/button';
import { RootLayout } from './layouts/RootLayout/RootLayout';
import { ChartType } from './models/chart';

function App() {
  return (
    <>
      <RootLayout>
        <BubbleBackground />
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 relative">
          <div className="col-span-1 lg:col-span-2 w-full flex flex-col justify-center items-center gap-7">
            <h1
              className="font-dmSans text-7xl font-bold text-cs-slate-900 tracking-wide
"
            >
              See amazing metrics.
            </h1>
            <p className="font-dmSans text-2xl">
              Gain real-time insights into server activity, including the most active users, top channels, user rankings, and much more.
              Explore the data, track engagement, and witness your community’s growth like never before!
            </p>

            <div className="flex gap-4">
              <Button className="group primary-button">
                <a href="https://discord.com/invite/comuafor" className="primary-button-link">
                  <svg
                    viewBox="0 0 256 199"
                    width="20"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    className="primary-button-svg"
                    fill="currentColor"
                  >
                    <path
                      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Join Community</p>
                </a>
                <div className="primary-button-bg">
                  <div></div>
                </div>
              </Button>
              <Button className="group primary-button">
                <a href="https://discord.com/invite/comuafor" className="primary-button-link">
                  <svg
                    viewBox="0 0 256 199"
                    width="20"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    className="primary-button-svg"
                    fill="currentColor"
                  >
                    <path
                      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Explore Code</p>
                </a>
                <div className="primary-button-bg">
                  <div></div>
                </div>
              </Button>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 w-full mt-16">
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
              subTitle: 'Displays the number of messages sent on the server during a period of time.',
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
          <div className="col-span-1 lg:col-span-2 w-full">
            <ChartCard
              chartCardData={{
                title: 'Most used words',
                subTitle: 'Highlights the most mentioned words in the server messages.',
                urlEndpoint: 'test',
                chartType: ChartType.BarChart
              }}
            />
          </div>
        </div>
      </RootLayout>
    </>
  );
}

export default App;
