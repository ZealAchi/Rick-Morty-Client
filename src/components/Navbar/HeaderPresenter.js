import React, { memo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { HOME_PAGE } from "graphql/querys";

import { Query } from "react-apollo";

//this function is very important for the search and this it's in the navbar(header)
export default memo(
  withRouter(function HeaderPresenter({
    SetCharacter,
    character,
    SetEpisode,
    episode,
    history,
    match
  }) {
    const inputRef = useRef(null);

    return (
      <>
        <Query variables={character} query={HOME_PAGE}>
          {({
            loading,
            data: {
              characters: { info: { next, prev, pages, count } = {} } = {}
            } = {}
          }) => {
            if (loading) return <> <nav
            // style={{ background: "#576574" }}
            // style={{background:"#273c75"}}
            style={{background:" rgb(87, 101, 116)"}}
            
            className="navbar navbar-expand-md navbar-dark"
          >
            <Link to="/" className="">
              <span className="navbar-brand">
                <h2>Rick & Morty API</h2>
              </span>
            </Link>

            {match.url !== "/episodes" ? (
              <Link to="/episodes" className="btn btn-primary">
                Episodes
              </Link>
            ) : (
              <Link to="/" className="btn btn-primary">
                Characters
              </Link>
            )}

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav ml-auto">
                <input
                  type="text"
                  placeholder="Search a character"
                  ref={inputRef}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    match.url !== "/episodes"
                      ? SetCharacter(inputRef.current.value)
                      : SetEpisode(inputRef.current.value);
                  }}
                >
                  Search
                </button>
              </ul>
            </div>
          </nav></>;

            next = next ? next : pages;
            prev = prev ? prev : 1;

            return (
              <>
                <nav
                  style={{ background: "#576574" }}
                  className="navbar navbar-expand-md navbar-dark"
                >
                  <Link to="/" className="">
                    <span className="navbar-brand">
                      <h2>Rick & Morty API</h2>
                    </span>
                  </Link>

                  {match.url !== "/episodes" ? (
                    <Link to="/episodes" className="btn btn-primary">
                      Episodes
                    </Link>
                  ) : (
                    <Link to="/" className="btn btn-primary">
                      Characters
                    </Link>
                  )}

                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon" />
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav ml-auto">
                      <input
                        type="text"
                        placeholder="Search a character"
                        ref={inputRef}
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          match.url !== "/episodes"
                            ? SetCharacter(inputRef.current.value)
                            : SetEpisode(inputRef.current.value);
                        }}
                      >
                        Search
                      </button>
                    </ul>
                  </div>
                </nav>
              </>
            );
          }}
        </Query>
      </>
    );
  })
);
