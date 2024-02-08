"use client";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { get_school_year, get_semester } from "@/school";
import { getCategory, getUnit } from "@/api/api";

const selectStyle = {
  m: 1,
  width: "80%",
};

const SearchHead = ({ year, semester }) => {
  return (
    <Box width={"100%"}>
      <Typography variant="h4" mb={2} color="purple" textAlign="center">
        科目與教師開課班級查詢
      </Typography>
      <Typography textAlign="center">
        您目前正在查詢 {year} 年 第 {semester} 學期的課表
      </Typography>
    </Box>
  );
};

const CategorySelector = ({ category, categories, handleChangeCategory }) => {
  return (
    <FormControl sx={{ ...selectStyle }}>
      <InputLabel id="category-label">類別 (Category)</InputLabel>
      <Select
        labelId="category-label"
        id="category-selector"
        label="類別 (Category)"
        value={category}
        onChange={handleChangeCategory}
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
    </FormControl>
  );
};

const UnitSelector = ({ unit, units, handleChangeUnit }) => {
  return (
    <FormControl sx={{ ...selectStyle }}>
      <InputLabel id="unit-label">科系(Department / Program)</InputLabel>
      <Select
        labelId="unit-label"
        id="unit-selector"
        value={unit}
        label="科系 (Department / Program)"
        onChange={handleChangeUnit}
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
    </FormControl>
  );
};

export default function Home() {
  const year = useMemo(() => {
    return get_school_year();
  }, []);

  const semester = useMemo(() => {
    return get_semester();
  }, []);

  const [degree, setDegree] = useState("");
  const [department, setDepartment] = useState("");
  const [unit, setUnit] = useState("");
  const [unitList, setUnitList] = useState([]);
  const [grade, setGrade] = useState("%");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategory(year, semester).then((res) => {
      setCategoryList(res.data);
    });
  }, [year, semester]);

  const updateDegree = (event) => {
    setDegree(event.target.value);
  };

  const updateDepartment = (event) => {
    setDepartment(event.target.value);
    getUnit(year, semester, event.target.value).then((res) => {
      setUnitList(res.data);
    });
    setUnit("");
  };

  const updateUnit = (event) => {
    setUnit(event.target.value);
  };

  const updateGrade = (event) => {
    setGrade(event.target.value);
  };

  const updateCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Box
        my={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchHead year={year} semester={semester} />
          <FormControl sx={{ ...selectStyle }}>
            <InputLabel id="degree-label">學制 (Level)</InputLabel>
            <Select
              labelId="degree-label"
              id="degree-selector"
              value={degree}
              label="學制 (Level)"
              onChange={updateDegree}
            >
              <MenuItem value="14">大學部</MenuItem>
              <MenuItem value="16">碩士班</MenuItem>
              <MenuItem value="17">博士班</MenuItem>
              <MenuItem value="46">在職碩士班</MenuItem>
              <MenuItem value="71">師資培育中心</MenuItem>
              <MenuItem value="%">所有學制</MenuItem>
            </Select>
            <FormHelperText>
              查詢師培課程，學制請選擇「所有學制」
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ ...selectStyle }}>
            <InputLabel id="department-label">學院 (College)</InputLabel>
            <Select
              labelId="department-label"
              id="department-selector"
              value={department}
              label="學院 (College)"
              onChange={updateDepartment}
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
          </FormControl>
          <UnitSelector
            unit={unit}
            units={unitList}
            handleChangeUnit={updateUnit}
          />
          <FormControl sx={{ ...selectStyle }}>
            <InputLabel id="grade-label">年級 (Grade)</InputLabel>
            <Select
              labelId="grade-label"
              id="grade-selector"
              label="年級 (Grade)"
              defaultValue={"%"}
              onChange={updateGrade}
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
            <FormHelperText>
              查詢通識教育中心課程，年級請選擇 &quot;0&quot;
            </FormHelperText>
          </FormControl>
          <CategorySelector
            category={category}
            categories={categoryList}
            handleChangeCategory={updateCategory}
          />
          <Button
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
