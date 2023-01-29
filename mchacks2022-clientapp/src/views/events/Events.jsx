import React, { useContext } from "react";
import { Icon } from "@iconify/react";
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
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg",
    name: "Rabais Spaghetti",
    date: "2023-01-29",
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20,
  },
];

function Events(props) {
    return (
        <div className="flex flex-col px-8 my-8">
            <div className="flex mb-8 ml-4">
                <div className="text-3xl mr-8">Nearby Events</div>
                <button className="flex items-center bg-green-500 hover:bg-green-400 hover:shadow pl-2 pr-4 rounded font-semibold">
                    <Icon icon={"ic:baseline-plus"} width="32px"/>
                    Event
                </button>
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
