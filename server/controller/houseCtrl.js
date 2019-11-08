module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get('db')
    const houses = await db.get_houses()
    res.status(200).send(houses)
  },
  addHouse: async (req, res) => {
    const db = req.app.get('db')
    const { name, address, city, state, zip } = req.body
    const house = await db.add_house({
      name,
      address,
      city,
      state,
      zip
    })
    res.status(200).send(house)
  },
  deleteHouse: async (req, res) => {
    const db = req.app.get('db')
    const house = await db.delete_house(req.params.id)
    res.status(200).send(house)
  }
}