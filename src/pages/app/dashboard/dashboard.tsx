import { Helmet } from "react-helmet-async";
import { MonthRevenue } from "./month-revenue";
import { MonthOrdersAmount } from "./month-orders-amount";
import { DayOrdersAmountCards } from "./day-orders-amount-cards";
import { MonthCanceledOrdersAmountCards } from "./month-canceled-orders-amount";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenue />
          <MonthOrdersAmount />
          <DayOrdersAmountCards />
          <MonthCanceledOrdersAmountCards />
        </div>
      </div>
    </>
  );
}
