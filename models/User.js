module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: { 
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true, 
        },
        displayName: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.STRING,
        image: DataTypes.STRING,
      }, { timestamps: false });    

    // Trabalhar no Inner Join de BlogPosts
    // Users.associate = (models) => {
    //     Users.hasMany(models.BlogPosts, { as: 'blogPosts', foreingKey: 'userId' });
    //   };
    return Users;
  };