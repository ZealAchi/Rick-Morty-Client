import React, { memo } from "react";
import { Card } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;
/// this function return information the episode
export default memo(withRouter(function CardEpisodies({
  name,
  air_date,
}) {
  return (
    <>
      <Card hoverable className="col-md-3">
        <Meta title={name} description={"published in " + air_date} />
      </Card>
    </>
  )
}))
