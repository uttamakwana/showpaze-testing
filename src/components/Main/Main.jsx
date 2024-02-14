import { useState } from "react";
// css
import "./main.css";
// icons
import { LeftIcon, RightIcon, StarIcon } from "../../constants/icons.js";

const Main = () => {
  const tabs = [
    "Event Details",
    "Assign Coordinate",
    "Session Management",
    "Generate SOW",
  ];
  const [activeTab, setActiveTab] = useState("Event Details");

  function renderTabs() {
    const items = tabs.map((tab) => (
      <button
        className={`main-tabs-btn ${activeTab === tab && "active"}`}
        key={tab}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ));
    return items;
  }
  return (
    <main className="main">
      <div className="main-heading flex">
        <h1>Event Name</h1>
        <span>(Venue Details)</span>
      </div>
      <div className="main-tabs">{renderTabs()}</div>
      <div className="event-details-form">
        <div className="event-details-select">
          <h1>Assign Coordinator</h1>
          <select name="assign-coordinate" id="assign-coordinate">
            <option value="Search Coordinate" selected disabled>
              Search Coordinate
            </option>
            <option value="Search Coordinate">User 1</option>
            <option value="Search Coordinate">User 2</option>
            <option value="Search Coordinate">User 3</option>
          </select>
          <p>Add new coordinate</p>
        </div>
        <div className="event-details-extra">
          <h1>
            Event Name <span>(venue here)</span>
          </h1>
          <p className="start-and-end">
            <span>
              Start: <strong>12-12-2023</strong>
            </span>
            <span>
              End: <strong>12-12-2023</strong>
            </span>
          </p>
          <p>
            Venue Address:{" "}
            <strong>Some location 12, Name here, city, state, country</strong>
          </p>
        </div>
      </div>
      <div className="main-data">
        <div className="assign-contractors">
          <h1>Assign Contractors</h1>
          <div className="contractors">
            <div className="contractor">
              <p>
                {" "}
                <span>Meeting Room 1</span> <StarIcon />{" "}
                <span className="position">12 position</span>
              </p>
              <p>Stars on 12th Jan 2023. Ends on 15th Jan 2023</p>
            </div>
            <div className="contractor">
              <p>
                {" "}
                <span>Meeting Room 2</span> <StarIcon />{" "}
                <span className="position">12 position</span>
              </p>
              <p>Stars on 12th Jan 2023. Ends on 15th Jan 2023</p>
            </div>
            <div className="contractor">
              <p>
                {" "}
                <span>Meeting Room 3</span> <StarIcon />{" "}
                <span className="position">12 position</span>
              </p>
              <p>Stars on 12th Jan 2023. Ends on 15th Jan 2023</p>
            </div>
            <div className="contractor">
              <p>
                {" "}
                <span>Meeting Room 4</span> <StarIcon />{" "}
                <span className="position">12 position</span>
              </p>
              <p>Stars on 12th Jan 2023. Ends on 15th Jan 2023</p>
            </div>
            <div className="contractor">
              <p>
                {" "}
                <span>Meeting Room 5</span> <StarIcon />{" "}
                <span className="position">12 position</span>
              </p>
              <p>Stars on 12th Jan 2023. Ends on 15th Jan 2023</p>
            </div>
            <div className="contractor">
              <p>
                {" "}
                <span>Meeting Room 6</span> <StarIcon />{" "}
                <span className="position">12 position</span>
              </p>
              <p>Stars on 12th Jan 2023. Ends on 15th Jan 2023</p>
            </div>
          </div>
        </div>
        <div className="main-data-positions">
          <h1>Positions</h1>
          <table className="main-data-positions-table" border={1}>
            <thead>
              <th>Position</th>
              <th>Time</th>
              <th>Info</th>
              <th>Quantity</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>{" "}
              <tr>
                <td>Camera (1video)</td>
                <td>7AM - 9PM</td>
                <td>LP Default</td>
                <td>20</td>
                <td>
                  <select
                    name="constrr"
                    id="constrr"
                    defaultValue={"Select Contructor"}
                  >
                    <option value="Select Contructor">Select Contructor</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tfoot">
            <LeftIcon /> <span className="dot dot-1"></span>{" "}
            <span className="dot dot-2"></span> <RightIcon />
          </div>
        </div>
      </div>
      <div className="main-btn flex-center">
        <button>Save Edits</button>
      </div>
    </main>
  );
};

export default Main;
