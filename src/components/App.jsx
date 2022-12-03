import { Profile } from "./User/User";
import { StatisticsList } from "./Statistics/StatisticsList";
import { FriendsList } from './Friends/Friends';
import { TransactionHistory } from "./Transaction/Transaction";
import { GlobalStyle} from "./GlobalStyles";

import data from '../data';
import user from '../user';
import friends from '../friends';
import transaction from '../transactions';





export const App = () => {
  return (
    <div>
      <Profile profile = { user } />
      <StatisticsList title = "Upload stats" statistics={ data } />
      <FriendsList friends = { friends } />
      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  )
};

            