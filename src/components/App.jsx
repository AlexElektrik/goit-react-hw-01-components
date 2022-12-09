import { User } from "./User/User";
import { StatisticsList } from "./Statistics/StatisticsList";
import { FriendsList } from "./Friends/Friends";
import { TransactionHistory } from "./Transaction/Transaction";
import { GlobalStyle } from "./GlobalStyles";

import data from "../data/data";
import user from "../data/user";
import friends from "../data/friends";
import transaction from "../data/transactions";

export const App = () => {
  return (
    <div>
      <User profile={user} />
      <StatisticsList title="Upload stats" statistics={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  );
};
