import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import paymentImage from "../../Assests/payment.png";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios"
const AddCredits = () => {

    const [cardNumber,setCardNumber]=useState("");
    const [amount,setAmount]=useState(0);
    const [cvc,setCVC]=useState("");
    const [expDate,setExpDate]=useState("");

    const handleAddCredits=()=>{
        axios.post("http://localhost:5000/ts/credit",{
            amount:amount,
            creditCard:cardNumber,
            cvc:cvc,
            expDate:expDate
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }



  return (
    <div>
      <Grid container spacing={4} style={{ marginTop: "5px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              textAlign: "start",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
            sx={{ fontSize: 32 }}
          >
            Hii John....
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 575 }} style={{ backgroundColor: "#f5f5f5" }}>
            <Typography
              style={{
                textAlign: "start",
                marginLeft: "60px",
              }}
              sx={{ fontSize: 32 }}
            >
              Add Credits
            </Typography>
            <hr />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={paymentImage}
                  style={{ height: "200px", marginTop: "20px" }}
                  alt="addCredits"
                  busImage
                />
                <CardActions
                  style={{
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "95px",
                  }}
                >
                  <Button color="warning" variant="contained" size="large">
                    Edit Card Details
                  </Button>
                </CardActions>
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <div style={{ display: "flex" }}>
                    <TextField
                      style={{
                        marginLeft: "45px",
                        textAlign: "start",
                      }}
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      onChange={(e)=>{
                          setAmount(parseInt(e.target.value))
                      }}
                    />
                  </div>

                  <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="Card Number"
                    variant="outlined"
                    onChange={(e)=>{
                        setCardNumber(e.target.value)
                    }}
                  />

                  <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="CVC"
                    variant="outlined"
                    onChange={(e)=>{
                        setCVC(e.target.value)
                    }}
                  />
                  <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="EXP Date"
                    variant="outlined"
                    onChange={(e)=>{
                        setExpDate(e.target.value)
                    }}
                  />
                  <CardActions
                    style={{
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "50px",
                      marginRight:"100px"
                    }}
                  >
                    <Button color="warning" variant="contained" size="large" onClick={handleAddCredits}>
                      Add Credits
                    </Button>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default AddCredits;
