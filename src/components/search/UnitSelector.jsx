import * as React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useUnit } from "@/swr/base";

/**
 * @param style
 * @param {import("formik").FormikProps} formik
 * @returns {JSX.Element}
 * @constructor
 */
export default function UnitSelector({ style, formik }) {
  const labelName = "科系(Department / Program)";
  const { units } = useUnit(
    formik.values.year,
    formik.values.semester,
    formik.values.department,
  );

  const error = formik.touched.unit && Boolean(formik.errors.unit);
  const helperText = error ? formik.errors.unit : "";

  return (
    <FormControl sx={{ ...style }} error={error}>
      <InputLabel id="unit-label">{labelName}</InputLabel>
      <Select
        id="unit-selector"
        labelId="unit-label"
        name="unit"
        value={formik.values.unit}
        label={labelName}
        onChange={formik.handleChange}
      >
        {units.length > 0 ? (
          units.map((unit) => {
            return (
              <MenuItem key={unit.id} value={unit.id}>
                {unit.name}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem disabled>請先選擇學院</MenuItem>
        )}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
