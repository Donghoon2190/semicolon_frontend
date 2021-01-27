import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
export default new ApolloClient({
    uri: "http://localhost:4040",
    clientState: {
        defaults,
        resolvers
    },
    request: async operation => {
        // 맨 처음 
        const token = await localStorage.getItem("token");
        return operation.setContext({
            headers: { Authorization: `Bearer ${token}` }
        });
    }

});