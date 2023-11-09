import { UsersApi } from '@shared/client-api';
import { ICreateUSer } from '@shared/types';
import { useState, useEffect } from 'react';

const useUsers = () => {
  const [usersList, setUsersList] = useState([]);
  const create = async (user: ICreateUSer) => {
    const response = await UsersApi.createUser(user);
    getUsersList();
  };

  const getUsersList = async () => {
    const data = await UsersApi.getUsersList();

    setUsersList(data);
  };

  const updateUserById = async (id: string) => {
    const response = await UsersApi.updateUserById(id);
    console.log(response);
    getUsersList();
  };

  const deleteUserById = async (id: string) => {
    const response = await UsersApi.deleteUserById(id);
    console.log(response);
    getUsersList();
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return { create, updateUserById, deleteUserById, usersList };
};

export default useUsers;
