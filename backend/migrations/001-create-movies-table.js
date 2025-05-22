exports.up = (pgm) => {
    pgm.createTable('movies', {
      id: 'id',
      title: { type: 'varchar(255)', notNull: true }
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('movies');
  };
  