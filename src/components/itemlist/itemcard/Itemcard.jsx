import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from './itemcard.module.css'

const Itemcard = () => {
  return (
    <Card className={styles.item}>
      <CardActionArea>
        <CardMedia
          className={styles.thumb}
          component="img"
          image="https://www.soccerbible.com/media/141867/mizuno-fb-min.jpg"
          alt="green iguana"
        />
        <CardContent className={styles.content}>
          <Typography gutterBottom variant="h5" component="div" className={styles.title}>
            Mizuno Aplha Japan
          </Typography>
          <Row className="align-items-end">
            <Col>
              <Typography variant="body2" color="text.secondary" className={styles.brand}>
                Mizuno
              </Typography>
              <Typography variant="body2" color="text.secondary" className={styles.price}>
                ฿ 6,590
              </Typography>
            </Col>
            <Col xs="auto">
              <div className={styles.tag}>
                <div>มือ 1</div>
                <div>26.5 cm</div>
              </div>
            </Col>
          </Row>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Itemcard;
