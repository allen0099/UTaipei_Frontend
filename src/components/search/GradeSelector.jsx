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
export default function GradeSelector({ style, formik }) {
  const labelName = "年級 (Grade)";

  const error = formik.touched.grade && Boolean(formik.errors.grade);
  const helperText = error
    ? formik.errors.grade
    : "查詢通識教育中心課程，年級請選擇 '0'";

  return (
    <FormControl sx={{ ...style }} error={error}>
      <InputLabel id="grade-label">{labelName}</InputLabel>
      <Select
        id="grade-selector"
        labelId="grade-label"
        name="grade"
        label={labelName}
        value={formik.values.grade}
        onChange={formik.handleChange}
      >
        <MenuItem value="0">0</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="6">6</MenuItem>
        <MenuItem value="%">所有年級</MenuItem>
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
