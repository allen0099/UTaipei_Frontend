import * as React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useCategory } from "@/swr/base";

/**
 * @param style
 * @param {import("formik").FormikProps} formik
 * @returns {JSX.Element}
 * @constructor
 */
export default function CategorySelector({ style, formik }) {
  const labelName = "類別 (Category)";
  const { categories } = useCategory(
    formik.values.year,
    formik.values.semester,
  );

  const error = formik.touched.category && Boolean(formik.errors.category);
  const helperText = error ? formik.errors.category : "";

  return (
    <FormControl sx={{ ...style }} error={error}>
      <InputLabel id="category-label">{labelName}</InputLabel>
      <Select
        labelId="category-label"
        id="category-selector"
        name="category"
        label={labelName}
        value={formik.values.category}
        onChange={formik.handleChange}
      >
        {categories.length > 0 ? (
          categories.map((category) => {
            return (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem disabled>讀取中...</MenuItem>
        )}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
