import { getConnection } from "./../database/database"

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query("SELECT id, name, programmers FROM language")
    // console.log(result)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id)
    console.log(result)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addLanguage = async (req, res) => {
  try {
    const { name, programmers } = req.body

    // Validación de datos
    if (name === undefined || programmers === undefined) {
      res.status(400).json({ message: "Bad request. Please fill all field." })
    }

    const language = { name, programmers }

    const connection = await getConnection()
    const result = connection.query("INSERT INTO language SET ?", language)

    res.json({ message: "Language added" })

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query("DELETE FROM language WHERE id = ?", id)
    // console.log(result)
    // res.json(result)
    res.json({ message: "Language deleted" })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const { name, programmers } = req.body

    // Validación de datos
    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(400).json({ message: "Bad request. Please fill all field." })
    }

    const language = { name, programmers }

    const connection = await getConnection()
    const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id])
    // console.log(result)
    // res.json(result)
    res.json({ message: "Language updated" })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// export const methods = {
//   getLanguages
// }

module.exports = {
  getLanguages,
  addLanguage,
  getLanguage,
  deleteLanguage,
  updateLanguage
};