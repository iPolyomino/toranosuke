import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Props {
  title: string;
  description: string;
}

const IndexCard: React.FunctionComponent<Props> = ({ title, description }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default IndexCard;
