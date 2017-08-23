# Todos app example

This is a react native example app using React Navigation, Redux and Firebase with Authentication and database persistence.   

There is no native dependancies on purpose to avoid setup hassles for this example. This should just work on ios and android simulators.

## Setup

- Make sure to have latest react native env installed
- add /config folder and add firebase.js file with the following format:

```
export default {
  apiKey: "key",
  authDomain: "domain",
  databaseURL: "db url",
  projectId: "project id",
  storageBucket: "storage bucket",
  messagingSenderId: "message sender id"
}

```
- go to dir then run ```npm install && react-native run-ios```
