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
export default function DepartmentSelector({ style, formik }) {
  const labelName = "學院 (College)";

  const error = formik.touched.department && Boolean(formik.errors.department);
  const helperText = error ? formik.errors.department : "";

  return (
    <FormControl sx={{ ...style }} error={error}>
      <InputLabel id="department-label">{labelName}</InputLabel>
      <Select
        id="department"
        name="department"
        labelId="department-label"
        value={formik.values.department}
        label={labelName}
        onChange={(e) => {
          formik.values.unit = "";
          formik.handleChange(e);
        }}
      >
        <MenuItem value="24">師資培育中心</MenuItem>
        <MenuItem value="51">進修推廣處</MenuItem>
        <MenuItem value="UZ">市政管理學院</MenuItem>
        <MenuItem value="WZ">教育學院</MenuItem>
        <MenuItem value="XS">校共同科目</MenuItem>
        <MenuItem value="XZ">人文藝術學院</MenuItem>
        <MenuItem value="YZ">理學院</MenuItem>
        <MenuItem value="ZZ">體育學院</MenuItem>
        <MenuItem value="%">所有學院</MenuItem>
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
