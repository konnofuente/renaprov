import { Card, CardContent } from "./ui/card";

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="value-card">
      <CardContent className="value-card-content">
        <img className="value-card-icon" alt={`${title} icon`} src={icon} />

        <div className="value-card-text">
          <h3 className="value-card-title">{title}</h3>
          <p className="value-card-description">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

