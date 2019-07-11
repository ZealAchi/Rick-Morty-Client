import gql from "graphql-tag";

///here are querys (this very important for the consumation the api Graphql)
export const GET_EPISODES = gql`
query($page: Int!, $episode:String!) {
  episodes(page: $page, filter:{name:$episode}) {
    info {
      count
      next
      prev
      pages
    }
    results{
      name
      air_date
      episode
      id
      characters{
        name
        image
        id
      }
    }
  }
  }
`
export const GET_PROFILE = gql`

  query($id: ID!) {
    character(id: $id){
        name
        status
        species
        type
        image
        gender
        location{
          dimension
          name
        }
        origin{
          name
        }
        episode{
          name
          air_date
          id
        }
      }
}
`;
export const HOME_PAGE = gql`
  query($page: Int!, $character: String!) {
    characters(page: $page, filter: { name: $character }) {
      info {
        count
        next
        prev
        pages
      }
      results {
        name
        id
        image
        status
      }
    }
  }
`;
