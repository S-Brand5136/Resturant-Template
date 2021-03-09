import Image from "next/image";
import styles from "../styles/Carousel.module.css";

// BootStrap Imports
import { Carousel, Button } from "react-bootstrap";

export default function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={7000}>
        <img alt="Picture of Fruits" src="/fruits.jpg" className={styles.img} />
        <Carousel.Caption className={styles.firstSlide}>
          <h3 className="mb-4">All Natural Ingredients</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptates eveniet possimus repudiandae odio eos harum unde,
            explicabo consequuntur nam commodi quas est iste illum voluptas
            quia, quaerat dolorem facilis.
          </p>
          <Button variant="outline-dark" size="lg">
            Learn More...
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          alt="Picture of natural foods"
          src="/naturalFoods.jpg"
          className={styles.img}
        />
        <Carousel.Caption className={styles.secondSlide}>
          <h3 className="mb-4">All Natural Ingredients</h3>
          <p className="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            quis vitae hic praesentium nisi necessitatibus quod ratione in nemo
            odit impedit, ipsa est! Explicabo accusamus, consequuntur labore
            saepe ad corrupti.
          </p>
          <Button variant="outline-dark" size="lg">
            Learn More...
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
