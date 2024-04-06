import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from './itemcard.module.css'

const Itemcard = () => {
  return (
    <Card className={styles.item}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1712229102477-f0d8a1b2dbd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nike
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รุ่น xxxx
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ราคา 10.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actionBtn}>
        <Button size="small" color="primary" style={{ backgroundColor: 'red', color: 'white' }}>
          ซื้อสินค้า
        </Button>
      </CardActions>
    </Card>
  );
};

export default Itemcard;
