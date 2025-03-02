import { BarList } from './Charts/BarList';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const chartData = [
  {
    name: 'User Test #0000001',
    value: 19.472
  },
  {
    name: 'User Test #0000002',
    value: 17.071
  },
  {
    name: 'User Test #0000003',
    value: 15.448
  },
  {
    name: 'User Test #0000004',
    value: 15.124
  },
  {
    name: 'User Test #0000005',
    value: 11.948
  },
  {
    name: 'User Test #0000006',
    value: 11.724
  },
  {
    name: 'User Test #0000007',
    value: 11.215
  },
  {
    name: 'User Test #0000008',
    value: 10.919
  },
  {
    name: 'User Test #0000009',
    value: 10.231
  }
];

function MessageByAuthorCard() {
  return (
    <Card className="  rounded-sm  ">
      <CardHeader className=" border-b-4 ">
        <CardTitle className="text-white text-lg font-semibold leading-5 ">Messages sent by author</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between font-bold text-[#636B77] text-sm my-4">
          <p>AUTHOR</p>
          <p>TOTAL MESSAGES</p>
        </div>
        <BarList data={chartData} color="red" />
      </CardContent>
    </Card>
  );
}

export default MessageByAuthorCard;
