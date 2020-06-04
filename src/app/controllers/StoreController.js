var StoreService = require('../services/StoreService');

exports.index = async function (req, res, next) {
    try {
        var stores = await StoreService.getStores()
        return res.status(200).json({ status: 200, data: stores, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUserStore = async function (req, res, next) {
    try {
        const { ownerID } = req.body;

        var store = await StoreService.getUserStore(ownerID);
        return res.status(200).json({ status: 200, counters: store.length, data: store, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}