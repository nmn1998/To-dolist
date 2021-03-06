import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, nextSelected }) => {
  console.log({ selectedTab });
  return (
    <div className="sidebar">
      <div
        onClick={() => nextSelected("INBOX")}
        className={selectedTab === "INBOX" ? "active" : " "}
      >
        <FaInbox className="icon" />
        Inbox
      </div>

      <div
        onClick={() => nextSelected("TODAY")}
        className={selectedTab === "TODAY" ? "active" : " "}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>

      <div
        onClick={() => nextSelected("NEXT")}
        className={selectedTab === "NEXT" ? "active" : " "}
      >
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
};

export default Sidebar;
