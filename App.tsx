import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventList from "./EventList";
import EventForm from "./EventForm";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Events list"
          component={EventList}
          options={{ title: 'Your events' }}
        />
        <Stack.Screen
          name="Event form"
          component={EventForm}
          options={{ title: 'Event form' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
