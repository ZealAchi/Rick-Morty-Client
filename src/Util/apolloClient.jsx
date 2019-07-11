import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';


///Here is the server url

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
	onError:({networkError})=>{
		if(networkError){
			console.log('Network Error',networkError);
        }
	}
});

export default client;
