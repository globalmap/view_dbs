import React from "react";
import { Card, Col} from "antd";
import { cardTypes } from '../../types';

const { Meta } = Card;

const Cards: React.FC<cardTypes> = ({ title, cover }) => (
    <Col span={6}>
      <Card
        hoverable
        style={{width: "250px", minHeight: "260px"}}
        cover={<img src={cover} alt="cover" />}
      >
        <Meta title={title} />
      </Card>
    </Col>
)

export default Cards;