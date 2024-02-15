"use client";
import * as React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "@/validations/search";
import DegreeSelector from "@/components/search/DegreeSelector";
import DepartmentSelector from "@/components/search/DepartmentSelector";
import UnitSelector from "@/components/search/UnitSelector";
import GradeSelector from "@/components/search/GradeSelector";
import CategorySelector from "@/components/search/CategorySelector";

const commonStyle = {
  m: 1,
  width: "80%",
};

const SearchHead = ({ values }) => {
  return (
    <Box width={"100%"}>
      <Typography variant="h4" mb={2} color="purple" textAlign="center">
        科目與教師開課班級查詢
      </Typography>
      <Typography textAlign="center">
        您目前正在查詢 {values.year} 年 第 {values.semester} 學期的課表
      </Typography>
    </Box>
  );
};

export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      const searchParams = new URLSearchParams(values);
      router.push("/result" + `?${searchParams.toString()}`);
    },
  });

  return (
    <Container maxWidth="lg">
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Paper
          sx={{
            my: 4,
            width: { xs: "100%", sm: "80%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchHead values={formik.values} />
          <DegreeSelector style={commonStyle} formik={formik} />
          <DepartmentSelector style={commonStyle} formik={formik} />
          <UnitSelector style={commonStyle} formik={formik} />
          <GradeSelector style={commonStyle} formik={formik} />
          <CategorySelector style={commonStyle} formik={formik} />
          <TextField
            id="course"
            label="課程名稱"
            sx={{
              ...commonStyle,
            }}
            value={formik.values.course}
            onChange={formik.handleChange}
            helperText={formik.touched.course && formik.errors.course}
          />
          <TextField
            id="teacher"
            label="教師姓名"
            sx={{
              ...commonStyle,
            }}
            value={formik.values.teacher}
            onChange={formik.handleChange}
            helperText={formik.touched.teacher && formik.errors.teacher}
          />
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            sx={{
              my: 2,
            }}
          >
            查詢
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
