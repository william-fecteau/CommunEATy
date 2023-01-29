import React from 'react';
import VerticalProgress from "../../components/VerticalProgress";
import {Icon} from "@iconify/react";

const event =  {
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
};

function EventDetails(props) {
    return (
        <div className="flex ml-32 mt-16 flex-col w-full">
            <div className="flex self-center">
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
                    <div className="flex flex-col my-2">
                        <div className="font-bold">Food</div>
                        <div className="uppercase">{event.food}</div>
                    </div>
                    <div className="flex flex-col my-2">
                        <div className="font-bold">Address</div>
                        <div className="uppercase">{event.address}</div>
                    </div>

                    <button className="flex items-center w-32 mt-8 bg-primary hover:bg-green-400 pl-10 py-2 hover:shadow rounded font-semibold">
                        <Icon icon={"ic:baseline-plus"} width="16px"/>
                        Join
                    </button>
                </div>
                <div className="flex flex-col w-64 ml-12 items-center justify-center">
                    <h1 className="self-center uppercase font-bold text-2xl mb-16">{event.name}</h1>
                    <VerticalProgress event={event} />
                </div>
            </div>

        </div>

    );
}

export default EventDetails;
