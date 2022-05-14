import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const FilterView = () => {
  return (
    <span className="header">
      DISCOVER OPTIONS
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Type
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Movies</option>
              <option value={20}>Tv</option>
            </NativeSelect>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Genre
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Action</option>
              <option value={20}>Romance</option>
            </NativeSelect>
          </FormControl>

          <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Year
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>2020</option>
              <option value={20}>2021</option>
            </NativeSelect>
          </FormControl>

          <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Year
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>2022</option>
              <option value={20}>2025</option>
            </NativeSelect>
          </FormControl>

          <FormControl fullWidth>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </FormControl>
        </Box>
      </div>
    </span>
  );
};

export default FilterView;
