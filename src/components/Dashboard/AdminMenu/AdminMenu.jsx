import { FaUserCog } from 'react-icons/fa'
import MenuItem from '../../Shared/Menu/MenuItem'


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manageUsers' />
    </>
  )
}

export default AdminMenu