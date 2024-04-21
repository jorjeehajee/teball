"use client"
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const modelData = [
  "Merculia",
  "Speed",
  "Control",
];

const ItemModel = () => {
  const [model, setModel] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModel(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">รุ่น</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={model}
          onChange={handleChange}
          input={<OutlinedInput label="รุ่น" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {modelData.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={model.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ItemModel;
