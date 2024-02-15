import * as yup from "yup";
import { get_school_year, get_semester } from "@/school";

const validationSchema = yup.object({
  year: yup.string().required(),
  semester: yup.string().required(),

  degree: yup.string().required("學制不可為空"),
  department: yup.string().required("學院不可為空"),
  unit: yup.string().required("系所不可為空"),
  grade: yup.string().required("年級不可為空"),
  category: yup.string().required("類別不可為空"),

  course: yup.string(),
  teacher: yup.string(),
});

const initialValues = {
  year: get_school_year(),
  semester: get_semester(),

  degree: "",
  department: "",
  unit: "",
  grade: "%",
  category: "",

  course: "",
  teacher: "",
};

export { validationSchema, initialValues };
