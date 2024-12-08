import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

const getPetbyId = async (id) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};

const createPet = async (petInfo) => {
  const response = await instance.post("/pets", petInfo);
  return response.data;
};
export { getAllPets, getPetbyId, createPet };
