import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: '#f3f3f3'
  }
})

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(e => {
          return {
            ...e,
            timer: Date.now()
          }
        })
      })
    }, 1000)


    const events = require("./db.json").events.map((e) => {
      return {
        ...e,
        date: new Date(e.date),
      };
    });
    this.setState({ events });
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    );
  }
}

export default EventList;
