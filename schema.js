const {
  GraphQlObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require("graphql");

//Lauch

const LauchType = new GraphQlObjectType({
  name: LauchType,
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    Launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

const RocketType = new GraphQlObjectType({
  name: RocketType,
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});


// Root Query