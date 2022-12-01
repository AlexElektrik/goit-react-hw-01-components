import { Profile } from "./User/User";
import { StatisticsList } from "./Statistics/StatisticsList";
import { FriendsList } from './Friends/FriendList';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


import data from '../data';
import user from '../user';
import friends from '../friends';
import transaction from '../transactions';
import { GlobalStyle, Container} from "./GlobalStyles";




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

            