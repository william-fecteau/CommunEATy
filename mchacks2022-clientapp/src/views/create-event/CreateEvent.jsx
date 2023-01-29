import React, {useState} from 'react';
import {Label, Textarea, TextInput} from "flowbite-react";
import PrimaryButton from "../../components/PrimaryButton";
import axios from "axios";

const defaultEventData = {
  name: "",
  date: "",
  description: "",
  basePrice: "",
  milestones: [
    {
      discount: "",
      nbMinUsers: "",
    },
    {
      discount: "",
      nbMinUsers: "",
    },
    {
      discount: "",
      nbMinUsers: "",
    },
    {
      discount: "",
      nbMinUsers: "",
    },
  ]
};

function CreateEvent() {
  const [eventData, setEventData] = useState(defaultEventData);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/events", eventData)

    } catch (ex) {
      console.error(ex)
    }
  }

  return (<div className="self-start mx-28 mb-36">
    <h1 className="text-4xl font-bold my-5">+New Event 🎉</h1>

    <div className="w-1/4">
      <div className="mb-2 block">
        <Label htmlFor="event-name" value="Event Name"/>
      </div>
      <TextInput
        id="event-name"
        type="event-name"
        value={eventData.name}
        onChange={(e) => {
          const eventDataCpy = {...eventData};
          eventDataCpy.name = e.target.value;
          setEventData(eventDataCpy);
        }}
      />
    </div>

    <div className="w-1/4">
      <div className="mb-2 block">
        <Label htmlFor="event-date" value="Event Date"/>
      </div>
      <TextInput
        id="event-date"
        type="text"
        value={eventData.date}
        onChange={(e) => {
          const eventDataCpy = {...eventData};
          eventDataCpy.date = e.target.value;
          setEventData(eventDataCpy);
        }}
      />
    </div>

    <div className="w-1/2">
      <div className="mb-2 block">
        <Label htmlFor="description" value="Description"/>
      </div>
      <Textarea
        id="description"
        name="description"
        rows={2}
        value={eventData.description}
        onChange={(e) => {
          const eventDataCpy = {...eventData};
          eventDataCpy.description = e.target.value;
          setEventData(eventDataCpy);
        }}/>
    </div>

    <div className="w-1/4">
      <div className="mb-2 block">
        <Label htmlFor="base-price" value="Base price"/>
      </div>
      <TextInput
        id="base-price"
        type="text"
        value={eventData.basePrice}
        onChange={(e) => {
          const eventDataCpy = {...eventData};
          eventDataCpy.basePrice = e.target.value;
          setEventData(eventDataCpy);
        }}
      />
    </div>
    <h1 className="text-2xl font-semibold mt-6">Milestones</h1>

    <div className="grid gap-6 mb-6 md:grid-cols-4">
      <div>
        <Label htmlFor="discount1" value="$ Discount"/>
        <TextInput
          id="discount1"
          type="discount1"
          value={eventData.milestones[0].discount}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[0].discount = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
      <div>
        <Label htmlFor="discount2" style={{color: "white"}} value="$ Discount"/>
        <TextInput
          id="discount2"
          type="text"
          value={eventData.milestones[1].discount}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[1].discount = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
      <div>
        <Label htmlFor="discount3" style={{color: "white"}} value="$ Discount"/>
        <TextInput
          id="discount3"
          type="discount3"
          value={eventData.milestones[2].discount}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[2].discount = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
      <div>
        <Label htmlFor="discount4" style={{color: "white"}} value="$ Discount"/>
        <TextInput
          id="discount4"
          type="discount4"
          className="inline-block"
          value={eventData.milestones[3].discount}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[3].discount = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
    </div>

    <div className="grid gap-6 mb-6 md:grid-cols-4">
      <div>
        <Label htmlFor="user1" value="# People"/>
        <TextInput
          id="user1"
          type="user1"
          className="inline-block"
          value={eventData.milestones[0].nbMinUsers}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[0].nbMinUsers = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
      <div>
        <Label htmlFor="user2" style={{color: "white"}} value="# People"/>
        <TextInput
          id="user2"
          type="user2"
          className="inline-block"
          value={eventData.milestones[1].nbMinUsers}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[1].nbMinUsers = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
      <div>
        <Label htmlFor="user3" style={{color: "white"}} value="# People"/>
        <TextInput
          id="user3"
          type="user3"
          className="inline-block"
          value={eventData.milestones[2].nbMinUsers}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[2].nbMinUsers = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
      <div>
        <Label htmlFor="user4" style={{color: "white"}} value="# People"/>
        <TextInput
          id="user4"
          type="user4"
          className="inline-block"
          value={eventData.milestones[3].nbMinUsers}
          onChange={(e) => {
            const eventDataCpy = {...eventData};
            eventDataCpy.milestones[3].nbMinUsers = e.target.value;
            setEventData(eventDataCpy);
          }}
        />
      </div>
    </div>
    <button onClick={handleSubmit}
            className=" center bg-primary hover:bg-green-400 hover:shadow p-2 w-32 rounded font-semibold">
      Create
    </button>
  </div>);
}

export default CreateEvent;