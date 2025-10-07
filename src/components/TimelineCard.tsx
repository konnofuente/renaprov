import React from "react";
import { Card, CardContent } from "./ui/card";
import { TimelineItem } from "../screens/AboutHistory/sections/TimelineSection/TimelineSection";

interface TimelineCardProps {
  timeline: TimelineItem;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ timeline }) => {
  return (
    <Card className="timeline-card">
      <CardContent className="timeline-card-content">
        <h3 className="timeline-card-title">
          {timeline.year}
        </h3>

        <div className="timeline-card-items">
          {timeline.items.map((item, itemIndex) => (
            <div key={itemIndex} className="timeline-item">
              <div className="timeline-item-icon">
                <img
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="CheckIcon"
                  src="/frame-1618873138.svg"
                />
              </div>
              <p className="timeline-item-text">
                {item}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
