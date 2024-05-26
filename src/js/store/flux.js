const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			getPeopleDetails: async (id) => {
				await fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const prevPplStore = getStore().people || [];
						setStore({people: [...prevPplStore, {properties: result.properties, uid: result.uid, description: result.description}] })


					})
					.catch(err => console.error(err))
				
			},

			getPeople: async () => {
				await fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						const actions = getActions()
						const promises = results.map(item => (actions.getPeopleDetails(item.uid)))
						return Promise.all(promises);
					})
					.catch(err => console.error(err))
			},
			
			  getDetailPlanet: async (id) => {
				await fetch(`https://www.swapi.tech/api/planets/${id}`)
				  .then((res) => res.json())
				  .then((data) => {
					const { result } = data;
					const prevPlanetStore = getStore().planet || [];
					setStore({
					  planet: [
						...prevPlanetStore,
						{
						  properties: result.properties,
						  description: result.description,
						  uid: result.uid,
						},
					  ],
					});
				  })
				  .catch((err) => console.error(err));
			  },
			  getPlanets: async () => {
				await fetch("https://www.swapi.tech/api/planets/")
				  .then((res) => res.json())
				  .then(data => {
					const { results } = data;
					const actions = getActions();
					const promises = results.map((item) =>
					  actions.getDetailPlanet(item.uid)
					);
		
					return Promise.all(promises);
				  })
				  .catch((err) => console.error(err));
			  },
			  getVehicleDetail: async (id) => {
				await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				  .then((res) => res.json())
				  .then((data) => {
					const { result } = data;
					const prevVehicleStore = getStore().vehicle || [];
					setStore({
					  vehicle: [
						...prevVehicleStore,
						{
						  properties: result.properties,
						  description: result.description,
						  uid: result.uid,
						},
					  ],
					});
				  })
				  .catch((err) => console.error(err));
			  },
			  getVehicles: async () => {
				await fetch("https://www.swapi.tech/api/vehicles/")
				  .then((res) => res.json())
				  .then(data => {
					const { results } = data;
					const actions = getActions();
					const promises = results.map((item) =>
					  actions.getVehicleDetail(item.uid)
					);
		
					return Promise.all(promises);
				  })
				  .catch((err) => console.error(err));
			  },

			

		}
	};
};

export default getState;
