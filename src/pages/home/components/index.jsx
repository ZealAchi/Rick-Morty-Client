import React, { useState } from "react";
import { Query } from "react-apollo";
import Card1 from "./card";
import { HOME_PAGE } from "graphql/querys";

import { GET_EPISODES } from "graphql/querys";
import { paginationButton } from "components/helpers/";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

///this function is the principal, beacuse consuming the api graphql and rendering information
export default withRouter(function HomeIndex({ character, history, match }) {
  const [page, setPage] = useState(1);
  return (
    <div className="col-md-12">
      <Query
        variables={{ page, character }}
        query={match.url === "/" ? HOME_PAGE : GET_EPISODES}
      >
        {({
          loading,
          error,
          data: {
            characters: {
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
            <>
              <div className="col-md-12 row text-center" style={{'justify-content':'center'}}>
                {results ? (
                  results.map(({ name, image, status, id }) => (
                    <Link style={{padding:10}} key={id} to={`/personaje/${id}`} {...id}>
                      <Card1
                        style={{ padding: 15 }}
                        className="col-md-4"
                        {...{ name, image, status, id }}
                      />
                    </Link>
                  ))
                ) : (
                  <div className="col-md-3">
                    <h2>No results found</h2>
                  </div>
                )}

                {count > 1 && (
                  <>
                    <div className="row  btn-toolbar  col-12 mb-5">
                      <br />
                      <hr />
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() => setPage(prev)}
                      >
                        {" "}
                        Previous
                      </button>

                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() => setPage(next)}
                      >
                        {" "}
                        Next
                      </button>
                    </div>

                    <div className="row  btn-toolbar  col-md-12 mb-5">
                      <div className="row btn-group">
                        {paginationButton(pages, setPage, page)}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        }}
      </Query>
    </div>
  );
});



