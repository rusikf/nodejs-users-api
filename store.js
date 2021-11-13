const FILE = 'users.json'

import fs from 'fs';

export const readUsers = () => {
  const fileData = fs.readFileSync(FILE)
  return JSON.parse(fileData)
};

export const saveUsers = (usersData) => {
  const fileData = JSON.stringify(usersData)
  console.log('usersData', usersData)
  fs.writeFileSync(FILE, fileData)
};
