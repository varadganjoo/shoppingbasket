import React, { useState } from "react";
import Data from "./prices/outrightPhones.json";
import Data2 from "./prices/outrightMbb.json";
import Product from "./Product";
import "./Outright.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

function Outright() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const allDevices = Data.concat(Data2);
  var i = 0;

  return (
    <div className="outright">
      <div className="outright__container">
        <div className="device__filter">
          <FormLabel component="legend">
            <strong>Brands:</strong>
          </FormLabel>

          <RadioGroup
            aria-label="brand"
            name="brand"
            onChange={(e) => setFilter(e.target.value)}
          >
            <div className="radioGroup">
              <FormControlLabel
                checked={filter === ""}
                control={<Radio color="default" />}
                label="All"
              />
              {allDevices.map(function (device) {
                i = i + 1;
                return (
                  <FormControlLabel
                    value={device.brand}
                    control={
                      <Radio color={i % 2 === 0 ? "secondary" : "primary"} />
                    }
                    label={device.brand}
                  />
                );
              })}
            </div>
          </RadioGroup>
        </div>

        <div className="outright__searchBar">
          <center>
            <input
              type="text"
              className="searchBar"
              placeholder="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </center>
        </div>

        <div className="outright__row">
          {allDevices
            .filter((device) => {
              if (device.brand === filter) {
                return device;
              } else if (filter === "") {
                return device;
              }
              return null;
            })
            .map(function (device) {
              return (
                <div className="outright__rowTwo">
                  <h3>{device.brand}</h3>
                  <div className="outright__rowThree">
                    {device.devices
                      .filter((phone) => {
                        if (
                          phone.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                          return phone;
                        return null;
                      })
                      .map(function (phone) {
                        return (
                          <Product
                            id={phone.id}
                            title={phone.title}
                            initial={phone.cost - phone.discount}
                            cost={phone.cost - phone.discount}
                            upgrade={false}
                            type="outright"
                            outright={phone.cost - phone.discount}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Outright;
