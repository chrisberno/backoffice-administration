"use strict";

module.exports = function(sequelize, DataTypes) {
    var Devices = sequelize.define('devices', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        login_data_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        googleappid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        device_active: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        device_id: {
            type: DataTypes.STRING,
            allowNull: false,
			unique: true
        },
        device_ip: {
            type: DataTypes.STRING(15),
            allowNull: true
		},
        device_mac_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        device_wifimac_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
		ntype: {
            type: DataTypes.STRING,
            allowNull: true
        },
        appid: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        app_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        app_version: {
            type: DataTypes.STRING,
            allowNull: false
        },
        device_brand: {
            type: DataTypes.STRING,
            allowNull: true
        },
        os: {
            type: DataTypes.STRING,
            allowNull: true
        },
		
		screen_resolution: {
            type: DataTypes.STRING,
            allowNull: true
        },
		hdmi: {
            type: DataTypes.STRING,
            allowNull: true
        },
		api_version: {
            type: DataTypes.STRING,
            allowNull: true
        },
		firmware: {
            type: DataTypes.STRING,
            allowNull: true
        },
		language: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'devices',
        associate: function(models) {
            Devices.belongsTo(models.login_data, {foreignKey: 'login_data_id'});
        }
    });
    return Devices;
};
