const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          body: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
          },
          userId: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Comments