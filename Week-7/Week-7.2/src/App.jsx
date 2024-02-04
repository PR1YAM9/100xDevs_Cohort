import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { notificationsAtom, sumSelector } from './Atoms';

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

const MainApp = () => {
  // const networkAtomValue = useRecoilValue(networkAtom);
  // const jobsAtomValue = useRecoilValue(jobsAtom);
  // const notificationAtomValue = useRecoilValue(notificationAtom);
  const notifications = useRecoilValue(notificationsAtom);
  // const setMessagingAtomValue = useSetRecoilState(messaginAtom); // Make sure messaginAtom is defined
  console.log(notifications)
  
  // const setMessagingAtomValue = useSetRecoilState(messaginAtom);
  // const [messaginAtomValue,setMessagingAtomValue] = useRecoilState(messaginAtom);
  const sum = useRecoilValue(sumSelector);
  return (
    <>
      <button>My network ({notifications.network >= 100 ? '99+' : notifications.network})</button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Messaging ({notifications.messaging})</button>
      <button>Notifications ({notifications.notifications})</button>
      <button onClick={() => setMessagingAtomValue((c) => c + 1)}>Me ({sum})</button>

    </>
  );
};

export default App;
