import React, { useState } from "react";
import { Query } from "react-apollo";
import ModalEpisodes from './modal'
import { GET_EPISODES } from "graphql/querys";
import { Table } from "reactstrap";


//this function execute the query for the datas the episodes and rendering in  the table
export default function Episodes({ episode, SetEpisode }) {
  const [page] = useState(1);
  return (
      <div className="col-md-12 container">
        <Query variables={{ page, episode }} query={GET_EPISODES}>
          {({
            loading,
            error,

            data: {
              episodes: {
                info: { next, prev, pages, count } = {},
                results
              } = {}
            } = {}
          }) => {
            if (loading) return <>loading</>;
            if (error) return <>error</>;

            next = next ? next : pages;
            prev = prev ? prev : 1;

            return (
              <center>
                {results ? (
                  <Table className="table-responsive{-sm|-md|-lg|-xl}">
                    <thead className="thead-dark">
                      <tr className="col-md-12 ">
                        <th className="col-md-4" >Name</th>
                        <th className="col-md-4">Air date</th>
                        <th className="col-md-4">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map(dato => {
                        return (
                          <tr key={dato.id}>
                            <td>{dato.name}</td>
                            <td>{dato.air_date}</td>
                            <td>
                            <ModalEpisodes {...dato}/>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="col-md-3">
                    <h2>No results found</h2>
                  </div>
                )}
              </center>
            );
          }}
        </Query>
      
    </div>
  );
}
