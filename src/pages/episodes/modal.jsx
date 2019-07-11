import React, { memo, useState } from "react";
import Button from "@material-ui/core/Button";
import { Modal } from "antd";
import { Link } from "react-router-dom";
//this function open the modal and show information the a episode
export default memo(function ModalEpisodes(props) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className="btn"
        onClick={() => setVisible(!visible)}
      >
        View
      </Button>
      <Modal
        title={<>Episode: {props.name}</>}
        visible={visible}
        width="98%"
        style={{ top: 25 }}
        onCancel={() => setVisible(!visible)}
        onOk={() => setVisible(!visible)}
      >
        <h1 className="h2">
          <strong> Name</strong>:{props.name}
        </h1>
        <h1 className="h4">
          <strong> Air Date</strong>:{props.air_date}
        </h1>
        <h1 className="h4">
          <strong>Episode</strong>:{props.episode}
        </h1>
        <h1 className="h4">
          <div className=" col-md-12" style={{ background: "#abd213" }}>
            <strong>characters in the episode :</strong>
            <section className="col-md-12 row  text-center" style={{'justify-content':'center'}}>
              {props.characters.map((d, index) => {
                return (
                  <Link className="col-md-4" key={index} to={`/personaje/${d.id}`} {...d.id}>
                    <section className="col-md-12">
                      <div className="jumbotron center-block">
                        <img
                          className="img-thumbnail"
                          style={{ width: 240 }}
                          src={d.image}
                          alt="alo"
                        />    <br />
                        {d.name}

                      </div>

                    </section>
                  </Link>
                )
              })}
            </section>
          </div>
        </h1>
      </Modal>
    </>
  );
});
