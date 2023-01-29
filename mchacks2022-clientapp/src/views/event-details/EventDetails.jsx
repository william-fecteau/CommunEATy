import React from 'react';

const event = {
    imageUrl: 'https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg',
    name: 'Rabais Spaghetti',
    date: '2023-01-29',
    description: '',
    ogPrice: 150,
    curPrice: 12,
    curUsers: 12,
    maxUsers: 20
};

function EventDetails(props) {
    return (
        <div className="flex mt-16">
            <div className="flex flex-col h-full">
                <div
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: `url(${event.imageUrl})`
                    }}
                    className="w-96 h-32 self-center"
                />
                <div className="flex flex-col my-4">
                    <div className="font-bold">Date</div>
                    <div className="uppercase">{event.date}</div>
                </div>

                <div className="flex flex-col my-4">
                    <div className="font-bold">Food</div>
                    <div className="uppercase">{event.date}</div>
                </div>
            </div>
            <div className="flex flex-col w-64 items-center justify-center">
                <h1 className="self-center uppercase font-bold text-2xl">{event.name}</h1>
            </div>
        </div>
    );
}

export default EventDetails;
