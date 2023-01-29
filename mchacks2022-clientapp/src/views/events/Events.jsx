import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import EventCard from "../../components/EventCard";
import { Link } from "react-router-dom";
import axios from "axios";

let events = [];
let eventList = [];

axios.get("/events").then((res) => {eventList = res.data});
console.log("EVENTSSSSS:" + eventList);

for (event1 in eventList) {
  eventId = event1[0];
  // Get Cur Users
  let curUsers = null;
  axios.get("/users", { params: { eventId: eventId } }).then((res) => {curUsers = res.data});
  // Get Cur Price
  let deltaPrice = null;
  axios.get("/price", { params: { eventId: eventId } }).then((res) => {curPrice = res.data});
  // Get milestones
  let milestones = null;
  axios.get("/milestones", { params: { eventId: eventId } }).then((res) => {milestones = res.data})

  let event = {
    imageUrl: eventRow.imageUrl,
    name: eventRow.eventName,
    date: eventRow.eventDate,
    ogPrice: eventRow.basePrice,
    curPrice: ogPrice - deltaPrice,
    curUsers: curUsers,
    maxUsers: eventRow.maxNbUsers,
    milestones: milestones,
  };
  events.push(event);
}


// const events = [
//   {
//     imageUrl:
//       "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 22,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 5,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 29,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 11,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 17,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 3,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 28,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
//   {
//     imageUrl:
//       "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
//     name: "Rabais Spaghetti",
//     date: "2023-01-29",
//     ogPrice: 150,
//     curPrice: 12,
//     curUsers: 6,
//     maxUsers: 30,
//     milestones: [
//       {
//         minNbUsers: 10,
//         priceDiscount: 0.99
//       },
//       {
//         minNbUsers: 15,
//         priceDiscount: 1.99
//       },
//       {
//         minNbUsers: 20,
//         priceDiscount: 2.99
//       },
//       {
//         minNbUsers: 25,
//         priceDiscount: 3.99
//       }]
//   },
// ];

function Events(props) {
  return (
    <div className="flex flex-col px-8 my-8">
      <div className="flex mb-8 ml-4">
        <div className="text-3xl mr-8">Nearby Events</div>
        <button
          className="flex items-center bg-green-500 hover:bg-green-400 hover:shadow pl-2 pr-4 rounded font-semibold">
          <Icon icon={"ic:baseline-plus"} width="32px" />
          Event
        </button>
      </div>
      <div className="flex flex-wrap max-w-6xl">
        {events.map(event => (
          <Link to='/details'>
            <EventCard event={event} />
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Events;
