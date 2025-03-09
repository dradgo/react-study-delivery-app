import { Order } from "src/types/types";

export const STATUS_COLORS = {
  pending: "status--yellow",
  cooking: "status--orange",
  delivery: "status--blue",
  completed: "status--green",
  cancelled: "status--red",
};
export const STATUS_TEXTS = {
  pending: "Ожидает",
  cooking: "Готовится",
  delivery: "Доставляется",
  completed: "Выполнен",
  cancelled: "Отменён",
};
