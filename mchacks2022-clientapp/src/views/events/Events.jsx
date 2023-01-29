import React, {useContext} from "react";
import {Icon} from "@iconify/react";
import EventCard from "../../components/EventCard";
import {Link} from "react-router-dom";

const events = [
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 22,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 30,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 29,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 11,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 17,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 3,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 28,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 6,
    maxUsers: 30,
    milestones: [
      {
        minNbUsers: 10,
        priceDiscount: 0.99
      },
      {
        minNbUsers: 15,
        priceDiscount: 1.99
      },
      {
        minNbUsers: 20,
        priceDiscount: 2.99
      },
      {
        minNbUsers: 25,
        priceDiscount: 3.99
      }]
  },
];

function Events(props) {
  return (
    <div className="flex flex-col px-8 my-8">
      <div className="flex mb-8 ml-4">
        <div className="text-3xl mr-8">Nearby Events</div>
        <Link
          className="hover:cursor-pointer flex items-center bg-green-500 hover:bg-green-400 hover:shadow pl-2 pr-4 rounded font-semibold"
          to="/create-event">
          <Icon icon="ic:baseline-plus" width="32px"/>
          Event
        </Link>
      </div>
      <div className="flex flex-wrap max-w-6xl">
        {events.map(event => (
          <Link to='/details'>
            <EventCard event={event}/>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Events;
