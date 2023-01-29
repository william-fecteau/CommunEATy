import React from 'react';

function Home() {
    return (
        <div className="flex">
            <div className="flex flex-col mr-32">
                <div className="flex flex-col flex-wrap mt-8">
                    <div className="font-extrabold text-4xl">
                        Eat and Save,
                        <br/>
                        Together 😎
                    </div>
                    <div className="mt-8">
                        Save money 💸 <br/>
                        Discover new cuisines 🧑‍🍳 <br/>
                        Meet new people 🤝 <br/>
                    </div>
                </div>


                <button className="mt-12 center bg-primary hover:bg-green-400 hover:shadow p-2 w-32 rounded font-semibold">
                    Lets Eat!
                </button>

            </div>
            <img className="self-center"
                 style={{width: '512px'}}
                src={'https://cdn.discordapp.com/attachments/482569552933289984/1069090172131627128/test.png'}/>
        </div>

    );
}
export default Home;
