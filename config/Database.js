import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'jwtauth',
  'developer',
  '6jgJTy8UoevDcyHGQZmVYNFODoLCaQFT',
  {
    host: 'postgres://developer:6jgJTy8UoevDcyHGQZmVYNFODoLCaQFT@dpg-cf9kg8un6mpv49e9g2ag-a/jwtauth',
    dialect: 'postgres',
  }
);

export default db;
