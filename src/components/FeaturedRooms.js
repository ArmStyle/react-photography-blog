import React, { Component } from "react";
// import { RoomContext } from "../context";
import Room from "./Room";
// import Loading from "./Loading";
import data from "../data";
export default class FeaturedRooms extends Component {
  // static contextType = RoomContext;

  render() {
    // let { loading, featuredRooms: rooms } = data;
    let rooms = data.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <div className="featured-rooms-center">{rooms}</div>
      </section>
    );
  }
}
