import { Profile } from "./user/user";
import { StatisticsList } from "./statistics/statisticsList";
import { FriendsList } from './friends/friendList';
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import { GlobalStyle } from "./GlobalStyles";

import data from '../data';
import user from '../user';
import friends from '../friends';
import transaction from '../transactions';




export const App = () => {
  return (
    <div>
      <Profile profile = { user } />
      <StatisticsList statistics = { data } />
      <FriendsList friends = { friends } />
      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  )
};

            