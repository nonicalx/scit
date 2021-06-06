import React from "react";
import "./messageSide.css";
import user from "../../assets/images/sampleUser.png";

export const MessageSide = () => {
    const messages= [1,2,3,4]
  return (
    <div className="scit-messages">
      <section className="scit-blue-header">
        <p className="mb-0">Messages</p>
      </section>
      <section>
            {
                messages.map((m,i)=>{
                    return(
                        <div ket={`${i}`}>
                            <Message/>
                        </div>
                    )
                })
            }
      </section>
    </div>
  );
};

const Message = ({
  id = 0,
  name = "Onome Adetayo",
  lastMessage = "it was nice tnx",
}) => {
  return (
    <div className="d-flex align-items-center justify-content-between scit-message-side">
      <div className="d-flex align-items-center">
        <img src={user} alt="user" className="scit-chat-dp" />
        <section>
          <p className="mb-0 scit-side-sender">{name}</p>
          <p className="mb-0 scit-side-lastMessage">{lastMessage}</p>
        </section>
      </div>
      <section className="scit-notice-count">
        <p className="mb-0">4</p>
      </section>
    </div>
  );
};
