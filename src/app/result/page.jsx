"use client";
import * as React from "react";
import { forwardRef, useContext } from "react";
import { redirect, useRouter } from "next/navigation";
import useSWRImmutable from "swr/immutable";
import {
  Button,
  Chip,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import fetcher from "@/swr/base";
import { ChosenContext } from "@/contexts/choose";

const BaseContainer = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
};

const TooltipText = forwardRef(function TooltipText(props, ref) {
  const { children, ...other } = props;
  return (
    <span {...other} ref={ref}>
      {children}
    </span>
  );
});

const TeacherCell = ({ teacher }) => {
  return (
    <TableCell>
      {teacher.single_week && (
        <>
          <Chip label="單周" color="warning" variant="outlined" size="small" />
          <br />
        </>
      )}
      {teacher.teacher}
      <br />
      {teacher.times.map((time) => {
        const dayTime = time.time.join(", ");

        return (
          <React.Fragment key={teacher.teacher + time.day + dayTime}>
            <Tooltip
              title={
                <React.Fragment>
                  <Typography color="inherit" variant="caption">
                    {time.location}
                  </Typography>
                </React.Fragment>
              }
            >
              <TooltipText>
                {time.day}
                {time.time.length > 0 ? " / " : ""}
                {dayTime}
              </TooltipText>
            </Tooltip>
          </React.Fragment>
        );
      })}
    </TableCell>
  );
};

export default function Home() {
  const { chosenContext } = useContext(ChosenContext);
  if (Object.keys(chosenContext).length === 0) redirect("/search");

  const router = useRouter();
  const searchParams = new URLSearchParams(chosenContext);

  const { data } = useSWRImmutable(
    "/api/courses" + `?${searchParams.toString()}`,
    fetcher,
  );

  const dataList = data?.data;

  if (!dataList) {
    return (
      <BaseContainer>
        <Typography variant="h4" textAlign="center">
          資料載入中...
        </Typography>
      </BaseContainer>
    );
  }

  if (dataList.length === 0) {
    return (
      <BaseContainer>
        <Typography variant="h4" textAlign="center">
          您所選取的範圍查無資料
        </Typography>
        <Button
          onClick={() => router.replace("/search")}
          sx={{
            my: 2,
          }}
        >
          返回查詢頁面
        </Button>
      </BaseContainer>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 2,
      }}
    >
      <Typography>
        您目前所查詢的條件範圍是
        <br />
        {chosenContext.year} 學年度 第 {chosenContext.semester} 學期
        {/*{JSON.stringify(chosenContext)}*/}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <TableHead
            sx={{
              whiteSpace: "normal",
            }}
          >
            <TableRow>
              <TableCell rowSpan={2}>班級</TableCell>
              <TableCell rowSpan={2}>類別</TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  maxWidth: "200px",
                }}
              >
                課程名稱
              </TableCell>
              <TableCell rowSpan={2}>選修別與學分</TableCell>
              <TableCell colSpan={2} align={"center"}>
                人數
              </TableCell>
              <TableCell rowSpan={2}>校區</TableCell>
              <TableCell rowSpan={2}>教師與時間</TableCell>
              <TableCell rowSpan={2}>備註</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>限制</TableCell>
              <TableCell>目前</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((row) => {
              const rowSpan = row.teachers.length;
              return (
                <>
                  <TableRow
                    hover
                    key={row.course_code}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell rowSpan={rowSpan} component="th" scope="row">
                      {row.class_name}
                      <br />
                      {row.course_code}
                    </TableCell>
                    <TableCell rowSpan={rowSpan}>{row.category}</TableCell>
                    <TableCell
                      rowSpan={rowSpan}
                      sx={{
                        maxWidth: "200px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      <Typography color={"red"}>
                        {row.name.chinese.tag ? row.name.chinese.tag : ""}
                      </Typography>
                      <Tooltip
                        title={
                          <React.Fragment>
                            <Typography color="inherit" variant="caption">
                              {row.name.chinese.text}
                            </Typography>
                          </React.Fragment>
                        }
                      >
                        <TooltipText>{row.name.chinese.text}</TooltipText>
                      </Tooltip>
                      <br />
                      <Typography color={"red"}>
                        {row.name.english.tag ? row.name.english.tag : ""}
                      </Typography>
                      <Tooltip
                        title={
                          <React.Fragment>
                            <Typography color="inherit" variant="caption">
                              {row.name.english.text}
                            </Typography>
                          </React.Fragment>
                        }
                      >
                        <TooltipText>{row.name.english.text}</TooltipText>
                      </Tooltip>
                    </TableCell>
                    <TableCell rowSpan={rowSpan}>
                      <Chip
                        label={`${row.full_half} | ${row.req_select}`}
                        size="small"
                      />
                      <br />
                      {row.credit} 學分 / {row.lecturing_hours} 小時
                    </TableCell>
                    <TableCell rowSpan={rowSpan} align="center">
                      {row.enrolled.min} <br />
                      {row.enrolled.max}
                    </TableCell>
                    <TableCell rowSpan={rowSpan} align="center">
                      {row.enrolled.current}
                    </TableCell>
                    <TableCell rowSpan={rowSpan}>{row.campus}</TableCell>
                    <TeacherCell teacher={row.teachers[0]} />
                    <TableCell rowSpan={rowSpan}>
                      <form
                        name="form"
                        method="post"
                        target="new"
                        action="https://shcourse.utaipei.edu.tw/utaipei/ag_pro/ag064_print.jsp"
                      >
                        <input
                          type="hidden"
                          name="arg01"
                          value={searchParams.get("year")}
                        />
                        <input
                          type="hidden"
                          name="arg02"
                          value={searchParams.get("semester")}
                        />
                        <input
                          type="hidden"
                          name="arg04"
                          value={row.syllabus}
                        />
                        <Button
                          type="submit"
                          variant="outlined"
                          color="secondary"
                        >
                          課程大綱
                        </Button>
                      </form>
                      {row.limit && (
                        <form
                          name="notes"
                          method="post"
                          target="new"
                          action="https://shcourse.utaipei.edu.tw/utaipei/ag_pro/ag203_limit.jsp"
                        >
                          <input
                            type="hidden"
                            name="ls_year"
                            value={searchParams.get("year")}
                          />
                          <input
                            type="hidden"
                            name="ls_sms"
                            value={searchParams.get("semester")}
                          />
                          <input
                            type="hidden"
                            name="data"
                            value={row.course_code}
                          />
                          <Button
                            type="submit"
                            variant="outlined"
                            color="secondary"
                          >
                            課程限修條件
                          </Button>
                        </form>
                      )}
                      {row.notes} <br />
                      {row.mixed && "合班班級：" + row.mixed}
                    </TableCell>
                  </TableRow>
                  {row.teachers.map((teacher, index) => {
                    if (index === 0) {
                      return null;
                    }
                    return (
                      <TableRow key={row.course_code + teacher.teacher}>
                        <TeacherCell teacher={teacher} />
                      </TableRow>
                    );
                  })}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
