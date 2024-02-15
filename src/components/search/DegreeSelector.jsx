import * as React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

/**
 * @param style
 * @param {import("formik").FormikProps} formik
 * @returns {JSX.Element}
 * @constructor
 */
export default function DegreeSelector({ style, formik }) {
  const labelName = "學制 (Level)";
  const error = formik.touched.degree && Boolean(formik.errors.degree);

  const helperText = error
    ? formik.errors.degree
    : "查詢師培課程，學制請選擇「所有學制」";

  return (
    <FormControl sx={{ ...style }} error={error}>
      <InputLabel id="degree-label">{labelName}</InputLabel>
      <Select
        id="degree"
        name="degree"
        labelId="degree-label"
        value={formik.values.degree}
        label={labelName}
        onChange={formik.handleChange}
      >
        <MenuItem value="14">大學部</MenuItem>
        <MenuItem value="16">碩士班</MenuItem>
        <MenuItem value="17">博士班</MenuItem>
        <MenuItem value="46">在職碩士班</MenuItem>
        <MenuItem value="71">師資培育中心</MenuItem>
        <MenuItem value="%">所有學制</MenuItem>
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
