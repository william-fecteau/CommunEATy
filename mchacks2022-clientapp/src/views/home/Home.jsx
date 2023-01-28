import React from 'react';
import EventCard from "../../components/EventCard";

const demoEvent = {
    imageUrl: 'https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png',
    //imageUrl: 'https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg',
    name: 'Rabais Spaghetti',
    date: '2023-01-29',
    ogPrice: 15.00,
    curPrice: 12.00,
    curUsers: 12,
    maxUsers: 20
};

function Home() {
    return (
        <div class="flex flex-col items-center">
            <div class="text-3xl font-bold underline text-red-500">Yahoo</div>
            <EventCard event={demoEvent}/>
        </div>
    );
}
export default Home;
