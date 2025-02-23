import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("pets"); //https://coded-pets-api-crud.eapi.joincoded.com/pets
  return response.data;
};

const getPetById = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};
/**
 * {
 * data: [{pet1}, {pet2}]
 * }
 */

const createPet = async (petInfo) => {
  //JSON -> petInfo = {name, image, type}
  const res = await instance.post("pets", petInfo);
  return res.data;
};

export { getAllPets, getPetById, createPet };
