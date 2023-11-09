import { Button, Title } from '@mantine/core';
import useUsers from '@shared/hooks/src/useUsers';
import { useEffect, useState } from 'react';
import { ICreateUser } from '@shared/types';
import Table from '../Table';

const Users = () => {
  const { usersList, create } = useUsers();
  const [newUser, setNewUser] = useState<ICreateUser>({
    name: '',
    email: '',
    image: null,
  });

  const handleChange = ({ target }) => {
    setNewUser({ ...newUser, [target.name]: target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewUser((prev) => ({ ...prev, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    create(newUser);
  };

  const handleEdit = () => {
    create(newUser);
  };

  const handleDelete = () => {
    create(newUser);
  };

  useEffect(() => {}, [newUser]);

  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Image',
      accessorKey: 'image',
    },
  ];

  return (
    <>
      <Title>New User</Title>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newUser.name}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={newUser.email}
      />
      <input
        onChange={handleImageChange}
        type="file"
        placeholder="Insert photo"
      />
      {newUser.image && (
        <img width={100} height={100} src={newUser.image} alt="User" />
      )}
      <Button onClick={handleClick}>Save User</Button>

      {usersList.length > 0 && (
        <Table
          actions={{
            edit: handleEdit,
            delete: handleDelete,
          }}
          columns={columns}
          data={usersList}
        />
      )}
    </>
  );
};

export default Users;
