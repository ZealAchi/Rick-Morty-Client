import React, { memo, useState } from "react";
import { Modal } from "antd";
import { Redirect ,withRouter} from "react-router-dom";
import { Query } from "react-apollo";
import { GET_PROFILE } from "graphql/querys";
import Cardepisodes from "./cardepisodes";

///this function make consuming the query for giving data for rendering information
export default memo(
  withRouter(function Perfil({ history, match }) {
    const { id } = match.params;

    const [visible, setVisible] = useState(true);

    function RedirectHome() {
      history.push("/");
    }
    return (
      <>
        {visible ? (
          <Query query={GET_PROFILE} variables={{ id }}>
            {({ data, loading, error }) => {
              if (loading) return <>loading</>;
              if (error) return <>error</>;
              return (
                <>
                  {data.character.name ? (
                    <Modal
                      title={data.character.name}
                      visible={visible}
                      width="100%"
                      style={{ top: 25 }}
                      onCancel={RedirectHome}
                      onOk={RedirectHome}
                    >
                      <div className="col-md-12  row "  style={{ background: "#abd213",padding:32 }} >
                        <div className="col-md-2 card">
                        <img
                          className="img-thumbnail"
                          style={{width: 240}}
                          src={data.character.image}
                          alt="alo"
                        />                        </div>
                        
                        <div className="col-md-4 card">
                          <h1 className="h2">Information:</h1>
                          <h1 className="h4">
                            <b>name:</b> {data.character.name}
                          </h1>
                          <h1 className="h4">
                            <b>gender:</b>
                            {data.character.gender}
                          </h1>
                          <h1 className="h4">
                            <b>species:</b>
                            {data.character.species}
                          </h1>
                          <h1 className="h4">
                            <b>origen:</b>
                            {data.character.origin.name}
                          </h1>
                          <h1 className="h4">
                            <b>status:</b>
                            {data.character.status}
                          </h1>
                        </div>
                        <section className="col-md-12">
                          
                          <h1 className="h2">Episodes where {data.character.name} participates:</h1>
                          <div className="col-md-12 row">                          
                          {data.character.episode.map((data)=>{
                            return(
                              <Cardepisodes {...data}/>
                            )
                          })}</div>
                          
                        </section>
                      </div>
                    </Modal>
                  ) : (
                    <Redirect to="/" />
                  )}
                </>
              );
            }}
          </Query>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  })
);
