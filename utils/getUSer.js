import axios from 'axios'

const getUserById = async (id, role) => {
  if (role === 'Parent') role = 'Student'
  return await axios
    .get(`http://127.0.0.1:3000/api/get${role}/${id}`)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export default getUserById
