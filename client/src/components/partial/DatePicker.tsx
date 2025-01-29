"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useFormStore } from "@/store/useFormStore";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker({
  label,
  subkey,
}: {
  label: string;
  subkey: string;
}) {
  const { form, setGeneral } = useFormStore();
  const [date, setDate] = React.useState<Date>();

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);

    if (newDate) {
      setGeneral({ [subkey]: format(newDate, "yyyy-MM-dd") });
    }
  };

  React.useEffect(() => {
    // @ts-ignore
    const storedDate = form.generalSection.general[subkey];
    if (storedDate) {
      setDate(new Date(storedDate));
    }
  }, []);

  return (
    <div className="flex flex-col w-fit gap-1.5">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
