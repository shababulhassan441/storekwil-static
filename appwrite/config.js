import { Client, Databases, Account, Storage, Users } from "node-appwrite";

const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    .setKey(process.env.NEXT_PUBLIC_API_KEY);

  return {
    get account() {
      return new Account(client);
    },
    get users() {
      return new Users(client);
    },

    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};


const AdminClientPerktify = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PERKTIFY_PROJECT_ID)
    .setKey(process.env.NEXT_PUBLIC_PERKTIFY_API_KEY);

  return {
    get account() {
      return new Account(client);
    },
    get users() {
      return new Users(client);
    },

    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};



export { createAdminClient,AdminClientPerktify };
