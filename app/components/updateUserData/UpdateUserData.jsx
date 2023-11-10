import React from "react";
import "./UpdateUserData.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, FormControl, FormLabel, Typography } from "@mui/material";
import UserData from "../../../public/MockDta";

const UpdateUserData = () => {
  return (
    <Box className="updater_form">
      <FormControl sx={{ width: "100%" }} id="updater_form-container">
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid black",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4">
            <b>Datos pesonales</b>
          </Typography>
          <Box className="updater_form-basicdata">
            <Box className="input_box">
              <FormLabel>Nombre</FormLabel>
              <TextField placeholder={UserData.BasicData.name}></TextField>
            </Box>
            <Box className="input_box">
              <FormLabel>Apellido</FormLabel>
              <TextField placeholder={UserData.BasicData.lastname}></TextField>
            </Box>
            <Box className="input_box">
              <FormLabel>Email</FormLabel>
              <TextField placeholder={UserData.BasicData.email}></TextField>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4">
            <b> Datos de envio</b>
          </Typography>
          <Box className="updater_form-address">
            <Box className="input_box">
              <FormLabel>Direccion</FormLabel>
              <TextField placeholder={UserData.BasicData.address_1}></TextField>
            </Box>
            <Box className="input_box">
              <FormLabel>Numero</FormLabel>
              <TextField
                placeholder={UserData.BasicData.address_number}
              ></TextField>
            </Box>
          </Box>
        </Box>
        <Button className="updater_form-button">Guardar</Button>
      </FormControl>
    </Box>
  );
};

export default UpdateUserData;
