import React from "react";
import { Button, TextField } from "@mui/material";
import Popup from "./Popup/Popup";

const HomePage = () => {
  const [buttonPopup, setButtonPopup] = React.useState(false);

  const [accountBookValue, setAccountBookValue] = React.useState({
    accountBook: "",
    accountNumber: "",
  });

  const changeAccoutValue = (e) => {
    setAccountBookValue((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitAccount = () => {
    const { accountBook, accountNumber } = accountBookValue;
    if (accountBook && accountNumber) {
      console.log(accountBookValue);
    } else {
      alert("Something is missing");
    }
  };

  return (
    <div className="homePage">
      <Button variant="contained" onClick={() => setButtonPopup(true)}>
        Create New
      </Button>
      <div className="sub-homePage">
        {/* {accountBookValue.map((aValue) => {
          return <li key={aValue.id}>{aValue.accountBook}</li>;
        })} */}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="inputDiv">
          <TextField
            id="standard-basic"
            name="accountBook"
            //   placeholder="Enter Your UserName"
            label="Accout Book"
            type="text"
            variant="standard"
            value={accountBookValue.accountBook}
          />
          <TextField
            id="standard-basic"
            name="accountNumber"
            //   placeholder="Enter Your UserName"
            label="Accout Number"
            type="number"
            variant="standard"
            value={accountBookValue.accountNumber}
            onChange={(e) => changeAccoutValue(e)}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={() => submitAccount()}
          >
            Add Book
          </Button>
        </div>
      </Popup>
    </div>
  );
};

export default HomePage;
