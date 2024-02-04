import {atom, selector} from  'recoil'
import axios from 'axios';
// export const networkAtom = atom({
//     key: 'networkAtom',
//     default: 104
// })
// export const jobsAtom = atom({
//     key: 'jobsAtom',
//     default: 5
// })
// export const notificationAtom = atom({
//     key: 'notificationAtom',
//     default: 12
// })
// export const messaginAtom = atom({
//     key: 'messaginAtom',
//     default: 2
// })

export const notificationsAtom = atom({
    key: 'notificationAtom',
    default: selector({
      key: 'notificationSelector',
      get: async () => {
        const res = await axios.get('https://sum-server.100xdevs.com/notifications');
        return res.data;
      },
    }),
  });
  
  // Update the sumSelector to access properties directly
  export const sumSelector = selector({
    key: 'sumSelector',
    get: ({ get }) => {
      const notifications = get(notificationsAtom);
      const sum = notifications.network + notifications.jobs + notifications.messaging + notifications.notifications;
      return sum;
    },
  });