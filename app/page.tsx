"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/ui/Button";
import { DateRangePicker } from "@/ui/DateRangePicker";
import { Form } from "./ui/Form";
import {
  ValidationSchema,
  ValidationSchemaType,
} from "./validation/DatePickerValidation";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { useMemo } from "react";
import { ThemeChecker } from "@/theme/ThemeChecker";
import { ContentWrapper } from "@/ui/ContentWrapper";

function countWorkingDays(startDate: Date, endDate: Date) {
  const cursor = new Date(startDate);
  let days = 0;

  while (cursor < endDate) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    const isWeekday = day !== 0 && day !== 6;
    if (isWeekday) days++;
  }

  return days;
}

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: {
      dateRange: {
        start: today(getLocalTimeZone()),
        end: parseDate("2026-09-06"),
      },
    },
  });
  const dateRange = useWatch({
    control,
    name: "dateRange",
  });

  const workingDays = useMemo(() => {
    if (!dateRange?.start || !dateRange?.end) return null;

    const startDate = dateRange.start.toDate(getLocalTimeZone());
    const endDate = dateRange.end.toDate(getLocalTimeZone());

    return countWorkingDays(startDate, endDate);
  }, [dateRange]);

  const onSubmit = (values: ValidationSchemaType) => {
    console.log("submitted values", values);
    console.log("working days estimate:", workingDays);
  };

  return (
    <div>
      <main>
        <ThemeChecker />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContentWrapper>
            <Controller
              control={control}
              name="dateRange"
              render={({ field }) => (
                <DateRangePicker
                  label="Date Range"
                  value={field.value}
                  onChange={field.onChange}
                  errorMessage={errors.dateRange?.message}
                />
              )}
            />
          </ContentWrapper>
          <Button type="submit" variant="primary" className="mt-4">
            Calculate
          </Button>
        </Form>
        <ContentWrapper>
          <h2 id="countdown-summary-title" className="summary-card__title">
            Working days left
          </h2>
          <h1 className="summary-card__text">
            {workingDays ?? "—"} working days left
          </h1>
          <p className="summary-card__hint">
            Weekends and holidays are excluded.
          </p>
        </ContentWrapper>
      </main>
    </div>
  );
}
