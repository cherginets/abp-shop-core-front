import {MOMENT_DATE_MYSQL} from "@/core/utils/formatters";
import moment from "moment";

export default function formatDateTime(str: string) {
  return moment(str).format(MOMENT_DATE_MYSQL);
}