import instance from "./index";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPetById = async (id) => {
  const res = await getAllPets();
  return res.data.find((pet) => pet?.id == id);
};

const createPet = async (data) => {
  const res = await instance.post("/pets", data);
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

export { getAllPets, getPetById, createPet, deletePet };
