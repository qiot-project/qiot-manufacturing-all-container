db = db.getSiblingDB('qiot_manufacturing');
db.createUser({
  user: 'qiotmanufacturing',
  pwd: 'qiotmanufacturingpassword',
  roles: [
    {
      role: 'readWrite',
      db: 'qiot_manufacturing',
    },
  ],
});