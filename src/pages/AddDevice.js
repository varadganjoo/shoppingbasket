import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./AddDevice.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "react-toastify/dist/ReactToastify.css";

function AddDevice(Data) {
  const allDevices = Data.data;
  const [months, setMonths] = useState("24");
  const [add, setAdd] = useState(15);
  const [bool, setBool] = useState(true);
  const [hro, setHro] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [initialPage, setInitialPage] = useState(window.location.pathname);
  const [disable, setDisable] = useState(false);
  var i = 0;

  useEffect(() => {
    if (initialPage !== window.location.pathname) {
      setFilter("");
      setSearchTerm("");
      setMonths("24");
      setInitialPage(window.location.pathname);
    }

    if (allDevices[0].devices[0].id === 7200) {
      setAdd(0);
    }

    if (months === "1") {
      setDisable(true);
      setBool(false);
      setAdd(0);
    } else {
      setDisable(false);
    }
  });

  const handleChange = () => {
    if (bool === false) {
      setBool(true);
      setAdd(15);
    } else {
      setBool(false);
      setAdd(0);
    }
  };

  const goHro = () => {
    if (hro === true) {
      setHro(false);
    } else {
      setHro(true);
    }
  };

  const thirdOption = () => {
    if (
      allDevices[0].devices[0].id === 4700 ||
      allDevices[0].devices[0].id === 1400
    ) {
      return <FormControlLabel value="36" control={<Radio />} label="36" />;
    }
  };

  const showCheckBox = (addon, id) => {
    if (addon === "hro" && id !== 7200) {
      return (
        <FormControlLabel
          checked={hro}
          control={<Checkbox color="primary" onChange={goHro} />}
          label="HRO"
        />
      );
    } else if (addon === "u&p") {
      if (allDevices[0].devices[0].id < 7200) {
        return (
          <div>
            <FormControlLabel
              checked={bool}
              disabled={disable}
              control={<Checkbox color="primary" onChange={handleChange} />}
              label="Upgrade and Protect"
            />
          </div>
        );
      }
    }
  };

  const calcCost = (cost, duration) => {
    return parseFloat(cost / duration);
  };

  const costSet = (phone) => {
    if (
      phone.id === 7500 ||
      phone.id === 7401 ||
      phone.id === 10300 ||
      phone.id === 9300 ||
      phone.id === 9100 ||
      phone.id === 7600 ||
      phone.id === 7601 ||
      (phone.id >= 8800 && phone.id <= 9000)
    ) {
      if (months !== "1") {
        return calcCost(phone.cost - phone.discount, 12).toFixed(2);
      } else {
        return (phone.cost - phone.discount).toFixed(2);
      }
    } else if (
      (phone.id >= 1000 && phone.id <= 1002) ||
      phone.id === 9201 ||
      phone.id === 9202 ||
      phone.id === 7400
    ) {
      return (phone.cost - phone.discount).toFixed(2);
    } else if (phone.cost >= 1700 && months === "36") {
      return (calcCost(phone.cost - phone.discount, 24) + add).toFixed(2);
    } else if (phone.cost >= 1700 && months === "24") {
      return (calcCost(phone.cost - phone.discount, 24) + add).toFixed(2);
    } else {
      return parseFloat(
        calcCost(phone.cost - phone.discount, months) + add
      ).toFixed(2);
    }
  };

  return (
    <div className="addDevice">
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
                  checked={filter !== "" && filter === device.brand}
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

      <div className="addDevice__buttons">
        <div className="addDevice__contractTerm">
          <center>
            <FormLabel component="legend">
              <strong>Months:</strong>
            </FormLabel>
            <RadioGroup
              aria-label="months"
              name="months"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            >
              <FormControlLabel value="12" control={<Radio />} label="12" />
              <FormControlLabel value="24" control={<Radio />} label="24" />
              {thirdOption()}
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Outright"
              />
            </RadioGroup>
          </center>
        </div>
        <div className="addDevice__checkbox">
          <div className="addDevice__upgradeProtect">
            <center>{showCheckBox("u&p")}</center>
          </div>

          <div className="addDevice__hro">
            <center>{showCheckBox("hro", allDevices[0].devices[0].id)}</center>
          </div>
        </div>
      </div>

      <div className="addDevice__searchBar">
        <center>
          <input
            type="text"
            className="searchBar"
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </center>
      </div>

      <div className="addDevice__row">
        {allDevices
          .filter((device) => {
            if (device.brand === filter) {
              return device;
            } else if (filter === "") {
              return device;
            }
          })
          .map(function (device) {
            return (
              <div className="addDevice__rowTwo">
                <h3>{device.brand}</h3>
                <div className="addDevice__rowThree">
                  {device.devices
                    .filter((phone) => {
                      if (
                        phone.title
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                        return phone;
                    })
                    .map(function (phone) {
                      return (
                        <Product
                          id={phone.id}
                          title={phone.title}
                          cost={costSet(phone)}
                          hro={hro}
                          initial={calcCost(
                            phone.cost - phone.discount,
                            months
                          ).toFixed(2)}
                          outright={phone.cost - phone.discount}
                          original={phone.cost}
                          upgrade={bool}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AddDevice;
